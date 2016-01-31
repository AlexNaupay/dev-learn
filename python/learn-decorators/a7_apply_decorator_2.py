from a6_my_decorator_2 import decorator


@decorator
def some_function(arg):  # this function takes a number and return 1 + arg*arg + 3
    print "I am some_function ... %d" % arg
    return arg

result = some_function(2)
print result  # expected 1 + 2*2 +3 = 8

result = some_function(3)
print result  # expected 1 + 3*3 +3 = 13
