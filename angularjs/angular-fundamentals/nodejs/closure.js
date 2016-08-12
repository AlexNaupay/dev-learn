/**
 * Closure: Una función que se ejecuta en el contexto de donde se creo no donde está ahora
 */
var extra=1000;  // extra = 1000

function getFunction() {

    // extra = 100
    var extra=100;  // Una función que se ejecuta en el contexto de donde se creo no donde está ahora

    var sumar = function (a,b) {
        return a+b+extra;
    };

    return sumar;
}

extra = 1100;  // extra=1100

var fn = getFunction();

extra = 1200;

var c = fn(1,2);  // Una función que se ejecuta en el contexto de donde se creo no donde está ahora

console.info(c);  // extra sigue siendo = 100