//
const $ =(elemento) => document.querySelector(elemento)

//variables
let body = document.body;
let btnDarkMode= document.getElementById("btnMode")
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
let inputColorFondo = $("#bg-color");
let bgCodigo = $(".color-bg-img");
let selectBlendMode = $("#bg-modifications");
let inputBrillo = $("#range-brightness");
let inputOpacidad = $("#range-opacity");
let inputContraste= $("#range-contrast");
let inputDesenfoque = $("#range-blur");
let inputEscalaG = $("#range-grayscale");
let inputSepia = $("#range-sepia");
let inputHue = $("#range-hue");
let inputSaturado = $("#range-saturated");
let inputNegativo = $("#range-adverse");
let btnReset = $("#btn-reset");


//funciones
//Filtro
const aplicarFiltros = () =>{
  let brightness = inputBrillo.value;
  let opacity = inputOpacidad.value;
  let contrast = inputContraste.value;
  let blur = inputDesenfoque.value;
  let grayscale = inputEscalaG.value;
  let sepia = inputSepia.value;
  let hue = inputHue.value;
  let saturate = inputSaturado.value;
  let invert = inputNegativo.value;

  imgMeme.style.filter = `brightness(${brightness}) opacity(${opacity}) contrast(${contrast}%) blur(${blur}px) grayscale(${grayscale}%) sepia(${sepia}%) hue-rotate(${hue}deg) saturate(${saturate}%) invert(${invert}%)`
}
// reset filtros
const restablecerFiltros =() =>{
  inputBrillo.value = 1;
  inputOpacidad.value = 1;
  inputContraste.value = 100;
  inputDesenfoque.value =0;
  inputEscalaG.value = 0;
  inputSepia.value = 0;
  inputHue.value = 0;
  inputSaturado.value = 100;
  inputNegativo.value = 0; 
  aplicarFiltros();
}

// formato
const formato = (direccion) =>{
  textoT.style.textAlign = direccion;
  textoB.style.textAlign = direccion;
}

// boton de descarga
const descargarMeme = () => {
    domtoimage.toBlob(contenedorImg).then(function (blob) {
      saveAs(blob, 'mi-meme.jpg');
    });

}; 

  // eventos
 
  //Modo Oscuro
  btnDarkMode.addEventListener( "click", ()=>{
    body.classList.toggle("dark-mode");
    if (body.classList.contains("dark-mode")){
      btnDarkMode.innerHTML = '<i class="fa-regular fa-lightbulb"></i> Modo Claro'
    }else {
      btnDarkMode.innerHTML = '<i class="fa-solid fa-lightbulb"></i> Modo Oscuro'
    }

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
  imgMeme.style.backgroundImage = `url(${url})`;
});

// Color de fondo

inputColorFondo.addEventListener ('blur', (event)=>{
  let colorfondo = event.target.value;
  imgMeme.style.backgroundColor = `${colorfondo}`;
  bgCodigo.innerHTML = `${colorfondo}`.toUpperCase();
});
 //Blend Mode

selectBlendMode.addEventListener('change', (event)=>{
  imgMeme.style.backgroundBlendMode = event.target.value;
});
//Filtro
inputBrillo.addEventListener('change', aplicarFiltros);
inputOpacidad.addEventListener('change', aplicarFiltros);
inputContraste.addEventListener('change', aplicarFiltros);
inputDesenfoque.addEventListener('change', aplicarFiltros)
inputEscalaG.addEventListener('change', aplicarFiltros);
inputSepia.addEventListener('change', aplicarFiltros);
inputHue.addEventListener('change', aplicarFiltros);
inputSaturado.addEventListener('change', aplicarFiltros);
inputNegativo.addEventListener('change', aplicarFiltros);

// reset filtros
btnReset.addEventListener('click', restablecerFiltros);


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
derecha.addEventListener('click', ()=>{
 formato('right');
});

centrado.addEventListener('click', ()=>{
  formato('center');
});

izquierda.addEventListener('click', ()=>{
  formato('left');
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




