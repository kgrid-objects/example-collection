const fs = require('fs-extra')
const yaml = require('js-yaml')
const klaw = require('klaw')
const path = require('path')
const through2 = require('through2')
// the dir to walk
dir_walk = './collection';

const koFilter = through2.obj(function (item, enc, next) {
    let filename = path.basename(item.path);
    if (filename.toLowerCase() === 'metadata.json' ) {
        this.push(item);
    }
  next()
})

const filterFunc = item => {
  const basename = path.basename(item)
  return basename != 'node_modules'
}

// walking dir_walk with the following options
klaw(dir_walk,{ fs: fs, filter:filterFunc})
.pipe(koFilter)
// read json
.pipe(through2.obj(function (item, enc, next) {

        let stream = this;

        fs.readJson(item.path).then(function (jsonobj) {

            // if it is for an implementation
            if (jsonobj.hasServiceSpecification) {

                // title, and paragraph text
                item.service = jsonobj.hasServiceSpecification;
                item.deployment = jsonobj.hasDeploymentSpecification;

                // push the item
                stream.push(item);

            }

            next();

        }).catch (function (e) {

            console.log(e);
            next();

        })

    }))

    // for each item
    .on('data', function (item) {
      var serviceSpec ={}
      var deploymentSpec ={}
      var readytomerge = true
      console.log(path.dirname(item.path))
      if(item.deployment){
        var servicefile = path.resolve(path.dirname(item.path), path.basename(item.service))
        var deploymentfile = path.resolve(path.dirname(item.path), path.basename(item.deployment))
        // console.log(servicefile)
        if (fs.pathExistsSync(servicefile)){
          // console.log('The file of "' +servicefile + '" is found.')
          serviceSpec = yaml.safeLoad(fs.readFileSync(servicefile, 'utf8'));
        } else {
          readytomerge =false
          console.log('No service specs found')
        }
        if (fs.pathExistsSync(deploymentfile)){
          // console.log('The file of "' +deploymentfile + '" is found.')
          deploymentSpec = yaml.safeLoad(fs.readFileSync(deploymentfile, 'utf8'));
        } else {
          readytomerge =false
          console.log('No deployment specs found')
        }
        if(readytomerge){
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
          // console.log(serviceSpec)
          fs.writeFileSync(servicefile,
            yaml.safeDump (serviceSpec, {
              'styles': {
                '!!null': 'canonical' // dump null as ~
              },
              'sortKeys': false        // sort object keys
            })
          )
          console.log('==  MERGED  ==')
        }
      }else {
        console.log('No deployment specification file is specficied.')
      }
    })

    // when the walk is over
    .on('end', function () {
        console.log('===============================================')
        console.log('Merging deployment into service specification is done!');
    });
