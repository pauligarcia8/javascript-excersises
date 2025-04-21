for (let something = 0; something < 4; something++) {
  setTimeout(function () {
    console.log(something);
  }, 3000);
}

// the output is 4, 4, 4, 4
// Se usa var, que tiene alcance de funcion (function scope), no de bloque. La funcion pasada a setTimeout no se ejecuta de inmediato, sino despues de 1000 ms (1 segundo). Para ese momento el bucle ya ha terminado y something vale 4. Como todos los setTimeout comparten la misma referencia a la variable somthing, cuando se ejecutan todos acceden a ese visualViewport.

