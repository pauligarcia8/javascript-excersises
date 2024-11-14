// Ejercicio 1:
// Crear un documento html con 3 cuadrados que, al ser clickeados, cambien el color de fondo del documento. Cada cuadrado debera tener un color distinto.


export const changeColor = (color) => {
  document.body.style.backgroundColor = color;
};

window.changeColor = changeColor;
// Ejercicio 2: 
// Programar un contador de caracteres para un textarea.

export const countCharacters = () => {
  const valueText = document.getElementById("textarea").value;
  const message = document.getElementById("message");
  if (valueText.length === 0) {
    message.textContent = `El textarea no tiene caracteres`;
  } else if (valueText.length === 1) {
    message.textContent = `El textarea tiene ${valueText.length} caracter`;
  } else {
    message.textContent = `El textarea tiene ${valueText.length} caracteres`;
  }
};

window.countCharacters = countCharacters;

// Ejercicio 3:
// Dado el siguiente array de alumnos utilizar los métodos de array vistos para generar un array con los alumnos aprobados. Se considera aprobado todo alumno que tenga una nota mayor o igual a 7.

export const alumnos = [
  {
    nombre: "Juan Gomez",
    nota: 7,
  },
  {
    nombre: "Pedro Rodriguez",
    nota: 4,
  },
  {
    nombre: "Roxana García",
    nota: 8,
  },
  {
    nombre: "Luciano Lopez",
    nota: 5,
  },
  {
    nombre: "Fernanda Gimenez",
    nota: 6,
  },
  {
    nombre: "Florencia Martinez",
    nota: 10,
  },
  {
    nombre: "Raul Sanchez",
    nota: 7,
  },
  {
    nombre: "Sandra Figueroa",
    nota: 8,
  },
];

const ul = document.getElementById("students-list");
for (let i = 0; i < alumnos.length; i++) {
  let li = document.createElement("li");
  li.appendChild(
    document.createTextNode(`${alumnos[i].nombre}: ${alumnos[i].nota}`)
  );
  ul.appendChild(li);
}

const approvedStudents = (alumnos) => {
  const approved = alumnos.filter((num) => num.nota >= 7);
  const allNames = approved.map((alumno) => alumno.nombre).join(", ");
  messageStudents.textContent = `Alumnos: ${allNames}`;
  console.log(approved);
};

const button = document.getElementById("students-btn");
const messageStudents = document.getElementById("students-approved");
button.onclick = () => approvedStudents(alumnos);
