var c = 1;

function carrusel() {
  document.querySelector("#imgcab").style.opacity = "0";
  document.querySelector("#imgcab").style.transition = "all 1s";
  setTimeout("cambio()", 1000);
}

function cambio() {
  c++;
  if (c > 5) {
    c =1;
  }
  document.querySelector("#imgcab").setAttribute("src", "img/ban"+c+".jpg");
  document.querySelector("#imgcab").style.opacity = "1";
  document.querySelector("#imgcab").style.transition = "all 1s";
  setTimeout("carrusel()", 2000);
}

function redimensiona_flecha() {
  var derecha = document.getElementById("der");
  var img = document.getElementById("imgcab");
  var ubica = img.clientWidth - derecha.clientWidth;
  derecha.style.left = ubica + "px";
}

function dia() {
  var f = new Date();
  document.querySelector("#pf").innerText = "Fecha: "+f.getDate()+"/"+(f.getMonth()+1)+"/"+f.getFullYear();
}

function hora() {
  var f = new Date();
  document.querySelector("#ph").innerText = "Hora: "+f.getHours()+":"+f.getMinutes()+":"+f.getSeconds();
  setTimeout("hora()", 1000);
}

document.body.setAttribute("onload", "carrusel(); redimensiona_flecha(); dia(); hora()");
document.body.setAttribute("onresize", "resimensiona_flecha()");