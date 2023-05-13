// Funciones Principales //
const buscarNombrePersonaje = (personajeIngresado) => {
    const personajeEncontrado = personajes.filter((personaje) => personaje.nombre.toLowerCase().includes(personajeIngresado.toLowerCase().trim()))
    personajeEncontrado.length > 0 ? cargarCardsHtml(personajeEncontrado) : errorBusqueda()
}

// Cargar Cards y Eventos DOM//

// DOM index//
const personajesCarrito = []
const sectionContainer = document.querySelector('.sectionContainer')
const contadorSeleccion = document.querySelector('p#contador')
const inputBuscador = document.querySelector('input#inputBusqueda')
const contadorCarrito = document.getElementById('contador')
const contenedorCarritoCard = document.querySelector('.containerCarrito')


const errorBusqueda = () => {
    sectionContainer.innerHTML = `
                                    <div class= "containerError">
                                        <h3>¡Ups!</h3>
                                        <h4>Mario no pudo encontrar coincidencias con tu busqueda,<br> por favor intenta nuevamente.</h4>
                                    </div>
                                `
}

function aplicarCardsHtml(personaje){
    return `
                <div class="personajeCard">
                    <h3>${personaje.nombre}</h3>
                    <img src="${personaje.imagen}" alt="">
                    <div class="subCard">
                        <div><button class= "botonAgregar" id="${personaje.categoria}">Añadir al carrito</button></div>
                        <p>$${personaje.valor}</p>
                    </div>
                </div>
    `
}

function cargarCardsHtml(personajes){
    sectionContainer.innerHTML = ""
    personajes.forEach((personaje) => {
        sectionContainer.innerHTML += aplicarCardsHtml(personaje)
    });
    activarBotonSeleccionarPersonaje()
}

cargarCardsHtml(personajes)
devolverPersonajesCarrito()

inputBuscador.addEventListener("search", (e) =>{
    buscarNombrePersonaje(e.target.value)
})


function activarBotonSeleccionarPersonaje(){
    const botonesAgregar = document.querySelectorAll(".botonAgregar")
        for (const botonAgregar  of botonesAgregar) {
            botonAgregar.onclick = () =>{
                let personajeEncontrado = personajes.find(personaje => personaje.categoria === parseInt(botonAgregar.id))
                Swal.fire({
                    text: 'Has seleccionado a ' + personajeEncontrado.nombre,
                    toast: true,
                    showCloseButtom: true,
                    position: 'bottom-right',
                    timer: 3000,
                    timerProgressBar: true,
                    background: '#e21414',
                    color: '#ffffff',
                    confirmButtonColor: '#151616',
                })
                personajesCarrito.push(personajeEncontrado)
                almacenarPersonajesCarrito()
                mostrarConteoPersonajes()
            }
        }
}

// DOM index//

/*Almacenar personajes en Local Storage*/

function almacenarPersonajesCarrito () {
    localStorage.setItem('personajesGuardados', JSON.stringify(personajesCarrito))
}

function devolverPersonajesCarrito () {
    const devolverPersonajesGuardados = JSON.parse(localStorage.getItem('personajesGuardados')) || []
    personajesCarrito.push(...devolverPersonajesGuardados) 
    mostrarConteoPersonajes()
}

function mostrarConteoPersonajes(){
    let contador = 0
    contador += personajesCarrito.length
    contadorCarrito.innerHTML = contador

}

