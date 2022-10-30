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
const btnDownload = $(".button-download");
const contenedorImg = $(".container-image");
//funciones


// boton de descarga
/* const descargarMeme = () => {

    domtoimage.toBlob(contenedorImg).then(function (blob) {
      saveAs(blob, 'mi-meme.jpg');
    });
  
  };  */


  // eventos

  //Modo Oscuro
btn.addEventListener( "click", ()=>{
    body.classList.toggle("dark-mode")
});

//Modal
xCloseModal.addEventListener('click', ()=> {
    modal.classList.add('close')
});

// contenido del Modal
btnText.addEventListener('click', ()=>{
  modal.classList.add('open')
  modal.classList.remove('close')
  modalImg.classList.add('close')
  modalTexto.classList.remove('close')
});

btnImg.addEventListener('click', ()=>{
  modal.classList.add('open')
  modal.classList.remove('close')
  modalImg.classList.remove('close')
  modalTexto.classList.add('close')
});

//Insertar Imagen

inputUrl.addEventListener('input', (event)=>{
  let url = event.target.value;
  imgMeme.innerHTML = `<img src="${url}" alt= "imagen meme">`
}); 




