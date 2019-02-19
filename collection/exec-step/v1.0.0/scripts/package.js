const path = require('path');
const shell = require('shelljs');
const execSync = require('child_process').execSync
const fs = require('fs-extra')


function findPackageJsonLocations (dirname) {
  return shell.find(dirname)
  .filter(function (fname) {
    return !(fname.indexOf('node_modules') > -1 || fname[0] === '.') &&
        path.basename(fname) === 'package.json'
  })
  .map(function (fname) {
    return path.dirname(fname)
  })
}

function filterRoot (dir) {
  if (path.normalize(dir) === path.normalize(process.cwd())) {
    console.log('Skipping root package.json');
    return false
  } else {
    return true
  }
}

function packageBundledKO (dir) {
  var exitCode = 0;
  console.log('Installing ' + dir + '/package.json');
  execSync('npm install && npm run build', { cwd: dir});
  fs.copy("v1.0.0/dist/v1.0.0", path.resolve(process.cwd(),"dist/v1.0.0"), function(error){
    if(error){
      console.error(err);
    } else {
      console.log("success!");
    }
  });


 return {
    dirname: dir,
    exitCode: exitCode
  }
}


shell.rm('-rf', 'dist')
shell.mkdir("dist");

let bundledKOs = findPackageJsonLocations(process.cwd())
.filter(filterRoot)
.map(packageBundledKO)

