function simetricNumber(num) {
  // La funcion llamada 'numeroSimetrico' recibe como argumento un numero entero 'num'
  // Esta devuelve true o false dependiendo de si el número es simétrico o no.
  // Un número es simétrico cuando es igual a su reverso.
  // Ej:
  // numeroSimetrico(11711) devuelve true

  // Tu código:
  let original = num.toString();

  let reverse = original.split('').reverse().join('');
  console.log('El numero es simetrico?', original === reverse);

  return original === reverse
}

simetricNumber(12521);
