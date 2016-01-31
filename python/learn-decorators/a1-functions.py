def foo(bar):  # functions is a object some as string, int, object, etc ..
    return bar + 1

print foo
print type(foo)


def caller_functions(callback, arg):  # this function takes a function and a argument
    return callback(arg)  # call function with argument

print caller_functions(foo, 3)



