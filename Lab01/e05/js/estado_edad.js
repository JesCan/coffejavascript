let nombresApellidos = prompt("Ingresa tus nombres y apellidos: ");
let edadPersona =prompt("Ingresa tu edad");

// Título principal en la página
document.write("<h1>Comparando edad</h1>");
document.write("<br>")

// Cargando datos que no se comparan
document.write('<H4>' + "Hola " + nombresApellidos + '</H4>');
document.write('<H4>' + "Tu edad es: " + edadPersona + '</H4>');
document.write('<HR>')

//Comparar edad para saber si es mayor o menor de edad
if (parseInt(edadPersona) < 18){
    document.write('<H4>' + "Según la edad ingresada eres menor de edad." + '</H4>');
} else {
    document.write('<H4>' + "Según la edad ingresada eres mayor de edad." + '</H4>');
}