function onlyNumbers(array) {
  // La funcion llamada 'soloNumeros' recibe como argumento un arreglo de enteros y strings llamado 'array'.
  // Debe devolver un arreglo con solo los enteros.
  // Ej:
  // soloNumeros([1, 'Henry', 2]) debe retornar [1, 2]

  // Tu código aca:

  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] === "number") {
      newArray.push(array[i]);
    }
  }

  console.log("Array solo de numeros", newArray);
  return newArray;
}

onlyNumbers([1, "Henry", 2]);
