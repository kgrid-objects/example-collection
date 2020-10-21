from .welcome import *
from leftpad import left_pad


def generate_page(input):
    return welcome_page(left_pad(input['name'], input['spaces']), input['size'])
