//Declarando variables
let numero = prompt("Ingrese un número entero: ");

// Texto para cargar en la página
document.write('<h2>' + "Tabla de multuplicar del " + numero + '</h2>');
document.write('<hr>')

// Multiplicación
for (let i = 0; i < 12;  i++) {
    document.write('<p>' + numero + " X " +  i + " = " +  (parseInt(numero) * parseInt(i)) + '</p>');
}