let contenido = document.body.querySelector('#mensaje');

let cargarTexto = document.body.querySelector('#cargar-texto');
cargarTexto.addEventListener('click', () => {
    contenido.value = 'Vengo desde Javascript';
});

let limpiarTexto = document.body.querySelector('#quitar-texto');
limpiarTexto.addEventListener('click', () =>{
    contenido.value = '';
})