# example with arguments
def decorator(some_function):

    def wrapper(*args):
        print "somethin is happening before some_function is caller"

        res = some_function(args[0])

        print "some_function is called"
        return 1 + res**2 + 3

    return wrapper
