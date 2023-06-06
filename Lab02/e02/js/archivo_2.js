let fecha = new Date();

let d = fecha.getDay();
let m = fecha.getMonth() + 1;
let y = fecha.getFullYear();

document.getElementById('pf').innerHTML = 'Fecha: ' + d + '/' + m + '/' + y;

function reloj(){
    let Hora = new Date();
    let h = Hora.getHours();
    let m = Hora.getMinutes();
    let s = Hora.getSeconds();

    document.getElementById('ph').innerHTML = 'Hora: ' + h + ':' + m + ':' + s;
    setTimeout('reloj()', 1000);
}

document.body.setAttribute('onload', 'reloj()');

var c = 0;
function carrusel(){
    c++;
    if (c>5) c = 1;
    document.getElementById('imgcab').setAttribute('src', 'img/ban' + c + '.jpg');
    setTimeout('carrusel()',1000);
}
document.body.setAttribute('onload','reloj(); carrusel()');