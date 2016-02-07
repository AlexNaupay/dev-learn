// Templates
export default function strings(){
    let nombre = "alexh";
    var template = "Mi nombre es: ${nombre}";  // Así no

    function calcularEdad(){
        return 24;
    }
    var template2 = `Mi nombre es: ${nombre} y tengo ${calcularEdad()} años de edad ...`;

    console.log(template);
    console.log(template2);
}
