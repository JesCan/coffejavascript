// Mi primera función
/* function mensaje() {
    alert('Mensaje enviado desde una función....')
}
// Ejecuntando función
mensaje(); */

// Declarando variable para valor que ingresa por el prompt
let valorNumerico = prompt('Ingrese un valor:');

//Construimos la función con un parámetro
function agregar(numero){
     let agregando = numero + 5;
     return agregando;
}

//Imprimiendo el resultado de la función en la web
//agregar(parseInt(valorNumerico));
document.write(agregar(parseInt(valorNumerico)));
