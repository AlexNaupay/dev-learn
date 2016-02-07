(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = basics;
/**
 * 1. Variables de bloque
 */

function basics() {
    for (var _i = 0; _i < 10; _i++) {
        console.log(_i);
    }

    if ('undefined' === typeof i) console.info("i, no está definido");

    // Constantes : Tienen alcance local
    var CONSTANTE = "alexh";

    console.log(CONSTANTE);
}

},{}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = functions;
function functions() {
    var saludar = function saludar() {
        return 'Hola Don Pepito';
    };
    console.log(saludar());

    function sumar(a, b) {
        var resultado = a + b;

        for (var _len = arguments.length, c = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
            c[_key - 2] = arguments[_key];
        }

        c.forEach(function (n) {
            resultado += n;
        });

        return resultado;
    }

    console.log(sumar(1, 2));
    console.log(sumar(1, 2, 3));
    console.log(sumar(1, 2, 3, 4));
}

},{}],3:[function(require,module,exports){
'use strict';

var _basics = require('src/basics.js');

var _basics2 = _interopRequireDefault(_basics);

var _string = require('src/string.js');

var _string2 = _interopRequireDefault(_string);

var _math = require('src/math.js');

var _math2 = _interopRequireDefault(_math);

var _functions = require('src/functions.js');

var _functions2 = _interopRequireDefault(_functions);

var _proxy = require('src/proxy.js');

var _proxy2 = _interopRequireDefault(_proxy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _basics2.default)();
(0, _string2.default)();
(0, _math2.default)();
(0, _functions2.default)();
(0, _proxy2.default)();

},{"src/basics.js":1,"src/functions.js":2,"src/math.js":4,"src/proxy.js":5,"src/string.js":6}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = maths;
function maths() {
    console.log(29);
    console.log(4);

    var arr1 = [1, 2, 3];
    var arr2 = Array.from(arr1, function (v) {
        return --v;
    });
    arr2.push(3);
    console.log(arr1);
    console.log(arr2);

    var fecha = [24, 4, 2015];
    var d = fecha[0];
    var y = fecha[2];

    console.log(d);
    console.log(y);
}

},{}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = proxy;
function proxy() {
    var Jose = {
        nombre: 'Don Jose'
    };

    var proxy = new Proxy(Jose, {
        get: function get(target, propiedad) {
            var mensaje = 'obteniendo ' + propiedad + ':\n' + target[propiedad];
            console.log(mensaje);
        }
    });

    proxy.nombr;
}

},{}],6:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = strings;
// Templates
function strings() {
    var nombre = "alexh";
    var template = "Mi nombre es: ${nombre}"; // Así no

    function calcularEdad() {
        return 24;
    }
    var template2 = "Mi nombre es: " + nombre + " y tengo " + calcularEdad() + " años de edad ...";

    console.log(template);
    console.log(template2);
}

},{}]},{},[3]);
