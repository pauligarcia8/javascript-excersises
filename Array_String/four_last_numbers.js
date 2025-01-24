// Una computadora comienza imprimiendo los números 2023, 2024 y 2025.
// Luego continúa imprimiendo sin parar la suma de los últimos 3 números que imprimió: 6072, 10121, 18218, …
// ¿Cuáles son los últimos 4 dígitos del número impreso en la posición 2023202320232023?
// Por ejemplo, en la posición 50, está impreso el número 8188013234823360 que termina en 3360.

// function last_four_numbers(position) {
//     let numbers = [2023, 2024, 2025];
//     let pointer = 0;

//     while ( numbers.length <= position) {
//         let newNumber = numbers[pointer] + numbers[pointer + 1] + numbers[pointer + 2];
//         numbers.push(newNumber);
//         pointer++;
//     }
//     console.log(numbers);
//     return numbers[position-1].toString().slice(-4);

// }

// console.log('Los ultimos 4 digitos del numero de la posicion que indicaste es: ', last_four_numbers(5)); 

function last_four_numbers(position) {
    let numbers = [2023, 2024, 2025];

    for (let i = 3; i < position; i++) {
        let newNumber = (numbers[i - 3] + numbers[i - 2] + numbers[i - 1]) % 10000; 
        numbers.push(newNumber);
    }

    return numbers[position - 1]; 
}

const position = 2023202320232023n; 
console.log(
    `Los últimos 4 dígitos del número en la posición ${position} son: `,
    last_four_numbers(Number(position % 10000n)) 
);