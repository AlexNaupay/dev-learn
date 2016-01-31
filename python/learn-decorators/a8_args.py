from time import sleep


def sleep_decorator(function):

    """
    Limits how fast the function is
    called.
    :param function:
    """

    def wrapper(*args, **kwargs):
        # print args
        sleep(0.1)
        return function(*args, **kwargs)
    return wrapper


@sleep_decorator
def print_number(num1):
    print "num1: %d" % num1
    return num1

print(print_number(222))


for num in range(1, 6):
    print(print_number(num))
