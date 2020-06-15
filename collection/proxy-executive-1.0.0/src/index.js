async function process(inputs){
  // Use arkid, version, path
  var hello = global.cxt.getExecutorByID("ark:/hello/proxy", "v1.0", "welcome")
  var bmi = global.cxt.getExecutorByID("ark:/proxy/bmicalc", "v2.0", "bmicalc")

  var results ={}
  if(hello!=null) {
    results.message = await hello.execute(inputs)
  }else {
    results.message = "Error: KO not found."
  }
  if(bmi!=null) {
    results.bmi =  await bmi.execute(inputs)
  }else {
    results.bmi ="Error: KO not found."
  }
  return results;
}
module.exports = process
