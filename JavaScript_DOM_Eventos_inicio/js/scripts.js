// ========================
// 1. MODIFICAR ELEMENTOS EXISTENTES
// ========================

// Cambiar el texto del heading
const heading = document.querySelector('.header__texto h2');
heading.textContent = "Nuevo Heading";
console.log(heading);

// ========================
// 2. MODIFICAR ENLACES EXISTENTES
// ========================

const enlaces = document.querySelectorAll('.navegacion a');
enlaces[0].textContent = "Nuevo Texto para Enlace";
enlaces[0].classList.add('nueva-clase');
// enlaces[0].classList.remove('navegacion__enlace');

// ========================
// 3. CREAR Y AGREGAR UN NUEVO ENLACE
// ========================

const nuevoEnlace = document.createElement('A');
nuevoEnlace.href = 'nuevo-enlace.html';
nuevoEnlace.textContent = 'Tienda Virtual';
nuevoEnlace.classList.add('navegacion__enlace');

const navegacion = document.querySelector('.navegacion');
navegacion.appendChild(nuevoEnlace);

// ========================
// 4. EVENTOS EN BOTONES Y FORMULARIOS
// ========================

const btnEnviar = document.querySelector(".boton--primario");
btnEnviar.addEventListener("click", function(evento) {
    console.log(evento);
    evento.preventDefault(); // Por si es botón fuera del form
});

const formulario = document.querySelector('.formulario');
formulario.addEventListener('submit', function(evento) {
    evento.preventDefault();

    const { nombre, email, mensaje } = datos;

    console.log(nombre, email, mensaje);

    if (nombre === '' || email === '' || mensaje === '') {
        mostrarError('Todos los campos son obligatorios');
        return;
    }

    // Aquí podrías enviar los datos o mostrar un mensaje de éxito
    mostrarMensaje("Formulario enviado correctamente");
});

//Muesta un alerta 
function mostrarMensaje(mensaje){
    const alerta = document.createElement('P');
    alerta.textContent = mensaje;
    alerta.classList.add('Correcto');

    formulario.appendChild(alerta);

    setTimeout(() => {
        alerta.remove();
    }, 5000);
}
// ========================
// 5. CAPTURA DE DATOS EN INPUTS/TEXTAREAS
// ========================

const datos = {
    nombre: '',
    email: '',
    mensaje: ''
};

const nombre = document.querySelector("#nombre");
const email = document.querySelector('#email');
const mensaje = document.querySelector('#mensaje');

nombre.addEventListener('input', leerTexto);
email.addEventListener('input', leerTexto);
mensaje.addEventListener('input', leerTexto);

function leerTexto(e) {
    datos[e.target.id] = e.target.value;
    console.log(e.target);
}

// ========================
// 6. FUNCIÓN PARA MOSTRAR ERRORES
// ========================

function mostrarError(mensaje) {
    const error = document.createElement('P');
    error.textContent = mensaje;
    error.classList.add('error');

    formulario.appendChild(error);

    // Eliminar mensaje luego de 5 segundos
    setTimeout(() => {
        error.remove();
    }, 5000);
}

function mostrarAlerta(mensaje, error = null){
    const alerta = document.createElement('P');
    alerta.textContent = mensaje;

    if(error){
        alerta.classList.add('error');
    }
    else{
        alerta.classList.add('correcto');
    }
    formulario.appendChild(alerta);

    setTimeout(() => {
        alerta.remove();
    }, 5000);
}