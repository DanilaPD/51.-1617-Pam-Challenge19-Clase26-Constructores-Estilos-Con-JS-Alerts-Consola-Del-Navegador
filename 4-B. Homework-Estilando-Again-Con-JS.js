//* Pasando estilo nuevamente con JS:

// Capturando por ID:
const oneTitle1 = document.getElementById("title");

const oneSubtitle1 = document.getElementById("subtitle");

// Capturando por CLASS:
const acheTres1 = document.getElementsByClassName("miniSubtitle");

// Capturando por TAG NAME:
const threeParagraphs = document.getElementsByTagName("p");

//!

// Cambiando el contenido de <h1> y <h2>:
title.innerHTML = "Danila Pérez Díaz";

oneSubtitle1.innerHTML = "3-6-91";

//!

// Cambiando los estilos con JS:
oneTitle1.style.border = "2px dotted yellow";
oneSubtitle1.style.border = "2px dotted violet";

threeParagraphs[0].style.color = "green";
threeParagraphs[1].style.color = "brown";
threeParagraphs[2].style.color = "orange";

oneTitle1.style.textAlign = "center";
oneTitle1.style.width = "80%";
