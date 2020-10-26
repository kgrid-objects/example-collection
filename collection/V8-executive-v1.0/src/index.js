function exec(input) {
  let executor = context.getExecutor("V8/simple/1.0/welcome");
  let name = JSON.stringify(input);
  return executor.execute(name, "application/json");
}
