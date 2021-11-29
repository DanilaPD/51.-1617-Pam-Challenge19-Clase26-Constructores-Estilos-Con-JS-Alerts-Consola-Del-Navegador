//* Pasando estilo con JS:

// Capturando por ID:
const oneTitle = document.getElementById("title");

const firstSubtitle = document.getElementById("subtitle1");

const secondSubtitle = document.getElementById("subtitle2");

// Capturando por CLASS:
const threeParrafitos = document.getElementsByClassName("parrafitos");

// Capturando por ETIQUETA:
const divLinks = document.getElementsByTagName("div");

//!

// Cambiando el contenido del <h1> y del primer <p>:
title.innerHTML = "Hello, my name is Tina!";

threeParrafitos[0].innerHTML = "¡Aguante el Lorem!";

//!

// Cambiando los estilos con JS:
firstSubtitle.style.border = "2px dotted yellow";
secondSubtitle.style.border = "2px dotted violet";

threeParrafitos[0].style.color = "blue";
threeParrafitos[1].style.color = "red";
threeParrafitos[2].style.color = "pink";

divLinks[0].style.textAlign = "center";
divLinks[1].style.textAlign = "center";
