
const execSync = require('child_process').execSync


execSync('npm install && npm run package', { cwd: "collection/hello-world"});
execSync('npm install && npm run package', { cwd: "collection/exec-example"});
execSync('npm install && npm run package', { cwd: "collection/exec-step"});
execSync('npm install && npm run build && npm run package', { cwd: "collection/score-calc"});
execSync('zip -r -X "../dist/99999-fk4n99hh99.zip" 99999-fk4n99hh99/', { cwd: "collection"});
execSync('zip -r -X "../dist/ri-bmicalc.zip" ri-bmicalc/', { cwd: "collection"});

