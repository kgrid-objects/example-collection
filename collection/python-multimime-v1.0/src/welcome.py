from leftpad import left_pad
import ast


def welcome(user_input):
    if isinstance(user_input, str):
        user_input = ast.literal_eval(user_input)
    return "Welcome to Knowledge Grid," + left_pad(user_input['name'], user_input['spaces'])
