function pluck(array, propiedad) {
  // La función llamada 'pluck' recibe como argumento un array de objetos llamado 'array' y el nombre de una
  // propiedad.
  // La función debe devolver un nuevo arreglo con solo los valores dentro de la propiedad recibida
  // Ej:
  // var productos = [{ name: 'TV LCD', price: 100}, { name: 'Computadora', price: 500 }]
  // productos.pluck(productos, 'name') debería devolver ['TV LCD', 'Computadora']
  // Pista: es una buena oportunidad para usar map.
  // Tu código acá:

  //   let newArray = [];
  //   array.map((e) => {
  //     newArray.push(e[propiedad]);
  //   });
  //   console.log("NewArray", newArray);
  //   return newArray;

  return array.map((e) => e[propiedad]); // map de por si ya retorna un nuevo array, por lo cual no es necesario crear un array y pushearle valores.
}
var productos = [
  { name: "TV LCD", price: 100 },
  { name: "Computadora", price: 500 },
];

pluck(productos, "name");
