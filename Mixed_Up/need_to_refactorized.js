var obj1 = { name: 'Something', color: "blue", logo: "logo.png" };

var list = [];

for (var prop of obj1) {
  list.push(obj1[prop]);
}

console.log(list);
// No se puede iterar con un for of un objetp
// -----------------
console.log(Object.keys(obj1))
// esta opcion solo haria un console log de las keys del objeto
// -----------------

console.log(Object.values(obj1))
// esta opcion haria un console.log de los valores de cada key 
// -----------------

var list = Object.keys(obj1).map(key => obj1[key])
console.log(list);
// esta opcion asignaria un nuevo array con solo los valores mapeados del objeto 
// luego mostraria en un console.log los valores de list
// -----------------
