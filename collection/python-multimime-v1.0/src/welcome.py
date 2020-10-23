from leftpad import left_pad
import ast


def welcome(user_input):
    if type(user_input) == 'string':
        input_object = ast.literal_eval(user_input)
        return "Welcome to Knowledge Grid," + left_pad(input_object['name'], input_object['spaces'])
    else:
        return "Welcome to Knowledge Grid," + left_pad(user_input['name'], user_input['spaces'])

