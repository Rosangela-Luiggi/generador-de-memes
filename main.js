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
const contenedorImg = $("#image-meme");
let inputColor = $("#bg-font");
let inputCFuente = $("#color-font");
let divTop = $(".top-text");
let divBottom = $(".bottom-text");
let codigoHex = $("#color");
let codigoLt = $("#color-ff")
let textoT = $("#text-t");
let textoB = $("#text-b");
let inputTextoT = $("#lb-top-text");
let inputTextoB = $("#lb-bottom-text")
let selectLetra = $("#font-family");
let inputTamañoF = $("#font-size");
let derecha = $("#btn-right");
let centrado = $("#btn-center");
let izquierda = $("#btn-left");

//funciones
// boton de descarga
const descargarMeme = () => {
    domtoimage.toBlob(contenedorImg).then(function (blob) {
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


//TEXTO
//Textos
inputTextoT.addEventListener('input', (event)=>{
  textoT.innerText = event.target.value.toUpperCase();
});

inputTextoB.addEventListener('input', (event)=>{
  textoB.innerText = event.target.value.toUpperCase();
});

//Fuente
selectLetra.addEventListener('input', (event)=>{
  let cambio = event.target.value
  textoT.style.fontFamily = `${cambio}`
  textoB.style.fontFamily = `${cambio}`
});

//Size Fuente
inputTamañoF.addEventListener('input', (event)=>{
  let medida = event.target.value;
  textoT.style.fontSize =  `${medida}px`;
  textoB.style.fontSize = `${medida}px`;
});

// Formato
derecha.addEventListener('click', (event)=>{
  textoT.style.textAlign = event.target.value;
  textoB.style.textAlign = event.target.value;
}); 

centrado.addEventListener('click', (event)=>{
  textoT.style.textAlign = event.target.value;
  textoB.style.textAlign = event.target.value;
});

izquierda.addEventListener('click', (event)=>{
  textoT.style.textAlign = event.target.value;
  textoB.style.textAlign = event.target.value;
});

// Color de Texto
inputCFuente.addEventListener ('blur', (event)=>{
  let colorLt = event.target.value;
  divTop.style.color = `${colorLt}`;
  divBottom.style.color = `${colorLt}`;
  codigoLt.innerHTML = `${colorLt}`.toUpperCase();
});

//Color de fondo
inputColor.addEventListener ('blur', (event)=>{
  let colorBg = event.target.value;
  divTop.style.backgroundColor = `${colorBg}`;
  divBottom.style.backgroundColor = `${colorBg}`;
  codigoHex.innerHTML = `${colorBg}`.toUpperCase();
});
//Descargar Imagen
btnDownload.addEventListener('click', descargarMeme);




