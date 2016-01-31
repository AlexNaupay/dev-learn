function decorator(some_function){
    function wrapper(){
        console.info('something is happening before some_function is called');

        some_function();

        console.info('something is happening after some_function is called');
    }

    return wrapper;
}

function some_function(){
    console.log("I am a some_function ..");
}

some_function = decorator(some_function);

some_function();