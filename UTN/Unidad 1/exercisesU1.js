// Ejercicio 1
// Utilizando lo aprendido escribir el codigo necesario para que dada una distancia determine el medio de transporte apropiado de acuerdo a las siguientes reglas:
// 0 a 1000 metros = pie
// 1000 a 10000 metros = bicicleta
// 10000 a 30000 metros = colectivo
// 30000 a 100000 metros = auto
// +100000 = avion
const metros = 0;
const pie = metros <= 1000;
const bicicleta = metros > 1000 && metros <= 10000;
const colectivo = metros > 10000 && metros <= 30000;
const auto = metros > 30000 && metros <= 100000;
const avion = metros > 100000;

// Ejercicio 2
// Haciendo uso de los bucles, recorrer un array de números y determinar cual es el mayor.

const array = [2, 10, 3, 45, 6, 0, 17];
const miFuncion = (array) => {

    let mayor = array[0]; 
    for (let index = 1; index < array.length; index++) {
        
        if (array[index] > mayor) {
            mayor = array[index]
        } 
    }
    return `El mayor numero dentro del array es ${mayor}`;
}
console.log(miFuncion(array))