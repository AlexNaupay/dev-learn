def parent(arg):
    print("Printing from the parent() function.")

    def first_child():
        return "Printing from the first_child() function."

    def second_child():
        return "Printing from the second_child() function."

    try:
        assert arg == 10
        return first_child
    except AssertionError:
        return second_child

foo = parent(10)
bar = parent(20)

print foo
print bar

print foo()
print bar()


