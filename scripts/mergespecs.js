const fs = require('fs-extra')
const yaml = require('js-yaml')

var serviceSpec = {}
var deploymentSpec ={}

var serviceFile = 'service.yaml'
var deploymentFile = 'deployment.yaml'

var kgridExt = {
    'x-kgrid-artifact': {
      type: 'string',
      value: 'main.js'
    },
    'x-kgrid-adapterType': {
      type: 'string',
      value: 'JAVASCRIPT'
    },
    'x-kgrid-entry': {
      type: 'string',
      value: 'process'
    },
}

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
  serviceSpec.paths[e].post['x-kgrid-artifact']={}
  serviceSpec.paths[e].post['x-kgrid-artifact'].type='String'
  serviceSpec.paths[e].post['x-kgrid-artifact'].value=endpointArr[e].artifact
  serviceSpec.paths[e].post['x-kgrid-adapterType']={}
  serviceSpec.paths[e].post['x-kgrid-adapterType'].type='String'
  serviceSpec.paths[e].post['x-kgrid-adapterType'].value=endpointArr[e].adapterType
  serviceSpec.paths[e].post['x-kgrid-entry']={}
  serviceSpec.paths[e].post['x-kgrid-entry'].type='String'
  serviceSpec.paths[e].post['x-kgrid-entry'].value=endpointArr[e].entry
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
