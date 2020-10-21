from kgrid_python_runtime.context import Context


def execute(json_input):
    ctx = Context()
    return ctx.get_executor_by_id('python/simple/1.0/welcome')(json_input)
