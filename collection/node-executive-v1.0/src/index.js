async function process(inputs) {
    var hello = global.cxt.getExecutorByID("node/simple/1.0/welcome")

    var results = {}
    if (hello != null) {
        results.message = await hello.execute(inputs)
    } else {
        results.message = "Error: KO not found."
    }
    return results;
}

module.exports = process
