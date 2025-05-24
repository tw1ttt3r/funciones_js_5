// funciones
// nombre
// parametros
// obtener un valor
// let nombre = prompt("Cual es tu nombre: ");

// permite encapsular lógica para poder ser invocada n número de veces
// Debe ser definida con un nombre, debe único y no debe ser una palabra reservada
// Puede recibir parametros
// Puede regresar valores
// Tiene un scope

// sitaxis
// function nombreDeLaFuncion() {}

// Saludar al usuario
function mensaje() {
    alert("Hola usuario");
}

// mensaje();

// Parametros: son valores que puede recibir una función,
// se deben declara entre los paranteris en la declaración de la funcion
// una función puede recibir n número de parametros, cada uno separado por ','

function mensajeError(error, mensaje) {
    if(error === undefined || mensaje === undefined) {
        throw Error("Se requieren ambos valores para ejecutar");
    }

    switch(error) {
        case 1:
            alert("Mensaje: "+ mensaje);
            break;
        case 2:
            alert("Mensaje: "+ mensaje);
            break;
        case 3:
            alert("Mensaje: "+ mensaje);
            break;
        case 4:
            alert("Mensaje: "+ mensaje);
            break;
        case 500:
            alert("Mensaje: "+ mensaje);
            break;
        default:
            alert("Mensaje: "+ mensaje);
    }
}

// const error = prompt("que error recibiste: ");
// const msj = prompt("que mensaje envio: ");

// mensajeError(error, msj);

// funciones anónimas
// al momento de ser declaradas no se les declara el nombre

// function () {}

// calculadora de areas

let siguiente = '';

do {    
    calculadora();
}
while(siguiente.toLocaleLowerCase() === 's');
alert("programa terminado")

// funciones arrow function o funciones flecha
// sintaxis: () => {}
// ejemplo 
// suma, resta, multiplicacion, division

const calculadoraBasica = (operacion, num1, num2) => {
    switch(operacion) {
        case "suma":
            return num1 + num2
            break;
        case "resta":
            return num1 - num2
            break;
        case "multiplicacion":
            return num1 * num2
            break;
        case "division":
            return num1 / num2
            break;
        default:
            return "Operacion no detectada"
    }
};

const suma = (num1, num2) => num1 + num2;
const resta = (num1, num2) => num1 - num2;
const multiplicacion = (num1, num2) => num1 * num2;
const division = (num1, num2) => num1 / num2;

const calculadoraBasicaFlecha = (operacion, num1, num2) => {
    switch(operacion) {
        case "suma":
            return suma(num1, num2)
            break;
        case "resta":
            return resta(num1,num2)
            break;
        case "multiplicacion":
            return multiplicacion(num1, num2)
            break;
        case "division":
            return division(num1, num2)
            break;
        default:
            return "Operacion no detectada"
    }
}