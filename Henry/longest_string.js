function longestString(strings) {
  // La función llamada 'stringMasLarga', recibe como argumento un arreglo de strings llamado 'strings'
  // y debe devolver el string más largo que hay en el arreglo (Es decir el de mayor cantidad de caracteres)
  // Ej:
  // stringMasLarga(['hi', 'hello', 'ni hao', 'guten tag']); debe retornar 'guten tag'
  // stringMasLarga(['JavaScript', 'HTML', 'CSS']); debe retornar 'JavaScript'
  // Tu código aca

  let longest = '';
  for (let i = 0; i < strings.length; i++ ) {

      if (strings[i].length > longest.length ) {
        longest = strings[i];
    }
  }
  console.log('Longest string:', longest);
  return longest;
}

longestString(['hi', 'hello', 'ni hao', 'guten tag']);
