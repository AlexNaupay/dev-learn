export default function functions(){
    let saludar = () => 'Hola Don Pepito';
    console.log(saludar());

    function sumar (a, b, ...c) {
        let resultado = a + b;

        c.forEach(n => {
            resultado += n;
        });

        return resultado;
    }

    console.log(sumar(1,2));
    console.log(sumar(1,2,3));
    console.log(sumar(1,2,3,4))
}
