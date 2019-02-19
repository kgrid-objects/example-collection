const path = require('path');
const shell = require('shelljs');
const execSync = require('child_process').execSync
const fs = require('fs-extra');


//Starting build distributed hello world KO
const output = "dist/exec-example";
shell.rm('-rf', 'dist');
shell.mkdir("-p", output);

//Copy over the metadata
try {
   fs.copySync( "metadata.json", path.resolve(output,"metadata.json"));
} catch (err){
  console.error(err)
}

packageBundledKO(path.resolve(process.cwd(),"v1.0.0"));

if (shell.exec('(cd dist; zip -r -X ../../../dist/exec-example.zip .)').code !== 0) {
  shell.echo('Error: Zipping dist');
  shell.exit(1);
}


function packageBundledKO (dir) {
  let exitCode = 0;
  console.log('Installing Bundled Implementation' + dir + '/package.json');
  execSync('npm install && npm run build', { cwd: dir});
  try {
    fs.copySync( path.resolve(dir.toString(),"dist"),
        path.resolve(process.cwd(),output.toString()));
    console.log('success!');
  } catch (err){
    console.error(err)
  }

  return {
    dirname: dir, exitCode: exitCode
  }
}