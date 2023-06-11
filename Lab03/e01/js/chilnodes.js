let productos = [];

document.querySelector("#agregar").onclick = function () {
    const escrito = document.querySelector("#nombre").value;
    if(document.querySelector("#nombre").value.length == 0){
        alert("Debes agregar un nombre de producto");
    } else{
        const item = document.querySelector(".list-group");
        item.innerHTML += `<li class="list-group-item">${escrito}</li>`;
    }
    vaciar();
};

function vaciar(){
    document.querySelector("#nombre").value="";
    document.querySelector("#nombre").focus();
}