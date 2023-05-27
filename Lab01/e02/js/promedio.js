//Ingresar nombre del estudiante
let nombrePersona = prompt("Por favor Nombre del estudiante: ");

//Ingresar 3 notas
let nota1 = prompt("Por favor Ingrese Nota 1: ");
let nota2 = prompt("Por favor Ingrese Nota 2: ");
let nota3 = prompt("Por favor Ingrese Nota 3: ");

//Calcular el promedio
let promedio = (parseInt(nota1) + parseInt(nota2) + parseInt(nota3)) / 3;

//Visualizar o mostrar el promedio calculado
alert("El promedio de " + nombrePersona + " es: " + promedio.toFixed(2));