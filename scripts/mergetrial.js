const fs = require('fs-extra')
const yaml = require('js-yaml')

var serviceSpec = {}
var deploymentSpec ={}

var serviceFile = 'service.yaml'
var deploymentFile = 'deployment.yaml'

if (fs.pathExistsSync(serviceFile)){
  console.log('The file of "' +serviceFile + '" is found.')
  serviceSpec = yaml.safeLoad(fs.readFileSync(serviceFile, 'utf8'));
} else {
  serviceFile = 'service.yaml'
  if (fs.pathExistsSync(serviceFile)){
    console.log('The file of "' +serviceFile + '" is found.')
    serviceSpec = yaml.safeLoad(fs.readFileSync(serviceFile, 'utf8'));
  } else {
    console.log('No service specs found in '+process.cwd())
  }
}

if (fs.pathExistsSync(deploymentFile)){
  console.log('The file of "' +deploymentFile + '" is found.')
  deploymentSpec = yaml.safeLoad(fs.readFileSync(deploymentFile, 'utf8'));
} else {
  deploymentFile = 'deployment-specification.yaml'
  if (fs.pathExistsSync(deploymentFile)){
    console.log('The file of "' +deploymentFile + '" is found.')
    deploymentSpec = yaml.safeLoad(fs.readFileSync(deploymentFile, 'utf8'));
  } else {
    console.log('No deployment specs found in '+process.cwd())
  }
}

console.log("Merging...")

var endpointArr = deploymentSpec.endpoints
// console.log(endpointArr)
var svcKeys = Object.keys(serviceSpec.paths)
// console.log(svcKeys)
svcKeys.forEach(function(e,index){
  serviceSpec.paths[e].post['x-kgrid-activation']={}
  serviceSpec.paths[e].post['x-kgrid-activation'].adapter=endpointArr[e].adapterType
  serviceSpec.paths[e].post['x-kgrid-activation'].artifact=endpointArr[e].artifact
  serviceSpec.paths[e].post['x-kgrid-activation'].entry=endpointArr[e].entry
})
console.log(serviceSpec)
fs.writeFileSync('service.yaml',
  yaml.safeDump (serviceSpec, {
    'styles': {
      '!!null': 'canonical' // dump null as ~
    },
    'sortKeys': false        // sort object keys
  })
)
