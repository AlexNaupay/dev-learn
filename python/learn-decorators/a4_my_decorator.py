def decorator(some_function):
    def wrapper():
        print "somethin is happening before some_function is caller"

        some_function()

        print "some_function is called"

    return wrapper
