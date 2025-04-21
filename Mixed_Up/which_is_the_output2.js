var x = 23
(function() {
  var x = 43;
  (function random() {
    x++;
    console.log(x);
    var x = 21
  })();
})()

// The output is NaN
// var x = 23 GLOBAL variable, no afecta nada dentro de las funciones internar porque esas funciones tienen su propia variable x (debido a var y function scope)

// Primera function anonima 
// var x = 43 LOCAL variable, nueva varuable para el ambito de la function anonima

// Funcion Random
// x++ -> x es undefined -> undefined++ = NaN
// console.log(x) NaN
// var x = 21 // asignacion ocurre despues del console.log