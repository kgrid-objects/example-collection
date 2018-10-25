const shell = require('shelljs');

let fcrepo = shell.exec("docker run --rm --name fcrepo-it-test -p 8090:8080 kgrid/fcrepo:4.7.5" , function(code, stdout, stderr) {
  console.log('Exit code:', code);
  console.log('Program output:', stdout);
  console.log('Program stderr:', stderr);
});


