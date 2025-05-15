const heading = document.querySelector('.header__texto h2');
// Cambiar texto del heading y mostrarlo en consola
heading.textContent = "Nuevo Heading";
console.log(heading);

// querySelectorAll
const enlaces = document.querySelectorAll('.navegacion a');
enlaces[0].textContent = "Nuevo Texto para Enlace";
enlaces[0].classList.add('nueva-clase');
// enlaces[0].classList.remove('navegacion__enlace');

// Generar el nuevo enlace
const nuevoEnlace = document.createElement('A');

// Agregar el href
nuevoEnlace.href = 'nuevo-enlace.html';

// Agregar el texto
nuevoEnlace.textContent = 'Tienda Virtual';

// Agregar la clase
nuevoEnlace.classList.add('navegacion__enlace');

// Agregarlo al Documento
const navegacion = document.querySelector('.navegacion');
navegacion.appendChild(nuevoEnlace);
