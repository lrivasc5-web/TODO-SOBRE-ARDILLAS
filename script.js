// 1. Guardamos una lista (array) de datos curiosos sobre ardillas
const datosArdillas = [
    "🐿️ ¡Los dientes de las ardillas nunca dejan de crecer! Por eso necesitan roer constantemente ramas y nueces para desgastarlos.",
    "🌳 Gracias a que olvidan dónde entierran sus bellotas, las ardillas plantan miles de árboles nuevos cada año sin darse cuenta.",
    "👀 Sus ojos están posicionados de tal forma que pueden ver prácticamente todo lo que les rodea, incluso lo que está detrás de ellas.",
    "🗣️ Se comunican entre sí mediante chasquidos de dientes, movimientos rápidos de cola y una gran variedad de sonidos agudos.",
    "🏃‍♂️ Una ardilla asustada correrá de lado a lado en zigzag para confundir a los depredadores como halcones o zorros."
];

// 2. Capturamos los elementos del HTML usando su ID
const boton = document.getElementById('btnDato');
const cajaMensaje = document.getElementById('cajaMensaje');
const textoDato = document.getElementById('textoDato');

// 3. Escuchamos el evento de 'clic' en el botón
boton.addEventListener('click', () => {
    // Escogemos un índice al azar de nuestra lista
    const indiceAzar = Math.floor(Math.random() * datosArdillas.length);
    
    // Asignamos el texto aleatorio al párrafo
    textoDato.textContent = datosArdillas[indiceAzar];
    
    // Mostramos la caja quitando la restricción de CSS (removiendo una clase o cambiando el estilo)
    cajaMensaje.classList.remove('oculto');
});
// 1. Seleccionamos los elementos que vamos a necesitar del HTML
const modal = document.getElementById("mi-modal-galeria");
const imagenModal = document.getElementById("foto-ampliada");
const botonCerrar = document.querySelector(".boton-cerrar-modal");

// 2. Buscamos TODAS las imágenes que están dentro de nuestra galería de Instagram
const fotosInstagram = document.querySelectorAll(".item-foto-insta img");

// 3. Le decimos a JavaScript que escuche cuando alguien haga clic en cualquier foto
fotosInstagram.forEach(foto => {
    foto.addEventListener("click", function() {
        // Activamos la ventana flotante cambiándole el display a 'flex'
        modal.style.display = "flex";
        // Tomamos la ruta de la imagen clickeada y se la pasamos a la foto grande
        imagenModal.src = this.src;
    });
});

// 4. Cuando el usuario haga clic en la (X), cerramos la ventana flotante
botonCerrar.addEventListener("click", function() {
    modal.style.display = "none";
});

// 5. TRUCO PRO: Si el usuario hace clic afuera de la foto (en el fondo oscuro), también se cierra
modal.addEventListener("click", function(evento) {
    if (evento.target === modal) {
        modal.style.display = "none";
    }
});