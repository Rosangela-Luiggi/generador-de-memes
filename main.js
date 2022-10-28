//
const $ =(elemento) => document.querySelector(elemento)

//variables
let body = document.body;
let btn = document.getElementById("btnMode")

//modal
let btnImg = $("#btn-modal-img");
let btnText = $("#btn-modal-text");
let modal = $("#modal");
let xCloseModal = $("#close-btn");
let modalTexto = $("#modal-tx");
let modalImg = $("#modal-image");
//funciones


// boton de descarga
const descargarMeme = () => {

    domtoimage.toBlob(contenedorImagen).then(function (blob) {
      saveAs(blob, 'mi-meme.jpg');
    });
  
  };


  // eventos

  //Modo Oscuro
btn.addEventListener( "click", ()=>{
    body.classList.toggle("dark-mode")
});

//Modal
xCloseModal.addEventListener('click', ()=> {
    modal.classList.remove('open')
})

btnText.addEventListener('click', ()=>{
        modal.classList.add('open')
        modalImg.classList.remove('close')
        modalTexto.classList.toggle('close')
});

btnImg.addEventListener('click', ()=>{
    modal.classList.toggle('open')
    modalImg.classList.remove('close')
    modalTexto.classList.toggle('close')
});
  

