function main(inputs) {
    var stepExecutor = context.getExecutor("js/simple/1.0/welcome");

    if (stepExecutor != null) {
        return stepExecutor.execute(inputs, "application/json");
    } else {
        throw new Error("Cannot find simple js hello world ko.")
    }

}

