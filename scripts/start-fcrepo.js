const newman = require('newman');
const shell = require('shelljs');

let cleanUp= shell.exec("docker rm fcrepo-it-test").stdout;

let fcrepo = shell.exec("docker run --name fcrepo-it-test -p 8080:8080 kgrid/fcrepo:4.7.5" , function(code, stdout, stderr) {
  console.log('Exit code:', code);
  console.log('Program output:', stdout);
  console.log('Program stderr:', stderr);
});


