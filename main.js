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
const imgMeme = $("#img-meme");
const inputUrl = $("#url-img");
//funciones


// boton de descarga
/* const descargarMeme = () => {

    domtoimage.toBlob(contenedorImagen).then(function (blob) {
      saveAs(blob, 'mi-meme.jpg');
    });
  
  }; */


  // eventos

  //Modo Oscuro
btn.addEventListener( "click", ()=>{
    body.classList.toggle("dark-mode")
});

//Modal
xCloseModal.addEventListener('click', ()=> {
    modal.classList.add('close')
});

btnText.addEventListener('click', ()=>{
  modal.classList.add('open')
  modalImg.classList.add('close')
  modalTexto.classList.remove('close')
});

btnImg.addEventListener('click', ()=>{
  modal.classList.add('open')
  modalImg.classList.remove('close')
  modalTexto.classList.add('close')
});

//Insertar Imagen
/* inputUrl.addEventListener('blur', (event)=>{
  let elemento = event.target;
  imgMeme.innerHTML = `<img src= ${elemento.src} alt= "imagen meme">`


});  */
