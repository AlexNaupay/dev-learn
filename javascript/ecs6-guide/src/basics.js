/**
 * 1. Variables de bloque
 */

export default function basics(){
    for (let i = 0; i< 10; i++){
        console.log(i);
    }

    if ('undefined' === typeof(i))
        console.info("i, no está definido");

// Constantes : Tienen alcance local
    const CONSTANTE = "alexh";

    console.log(CONSTANTE);
}