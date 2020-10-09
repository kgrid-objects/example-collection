from leftpad import left_pad

def welcome(json_input):
    return "Welcome to Knowledge Grid," + left_pad(json_input['name'], 100)
