
const uuidv4 = require('uuid/v4');

function execute(inputs){
  let uuid = uuidv4();
  let numberOfSteps = inputs.steps || 1;
  let correlation = {};
  let output = {};
  let steps =[];


  correlation.id=uuid;
  correlation.start=Date.now();
  correlation.end=null;

  try {

    for (let i = 0; i < numberOfSteps; i++) {

      let request = {};
      request.iterations=inputs.iterations;
      request.name=inputs.name+"-"+i;
      request.correlation=correlation;

      let stepExecutor = context.getExecutor("exec-step-v1.0.0/welcome");
      let stepResponse = stepExecutor.execute(request);

      let step = {};
      step.name=stepResponse.name;
      step.correlationId=stepResponse.correlation.id;
      step.threadsafe=stepResponse.threadsafe.id;
      step.iterations=stepResponse.iterations;
      step.result=stepResponse.result;
      steps.push(step);

    }

    output.steps=steps;

    correlation.end=Date.now();
    output.correlation=correlation;


  } catch(err){
    throw "Could not get steps " + err;
  }
  return output;
}

module.exports=execute;
