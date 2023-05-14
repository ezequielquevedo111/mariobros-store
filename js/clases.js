/*Variables globales y funciones generales*/

const personajes = []
const personajesCarrito = []
const contadorCarrito = document.getElementById('contador')
const UrlJson = 'js/personajes.json'

/*Se guardar personajes en el local storage y luego los recupero*/
function almacenarPersonajesCarrito() {
    localStorage.setItem('personajesGuardados', JSON.stringify(personajesCarrito))
}

function devolverPersonajesCarrito () {
    const devolverPersonajesGuardados = JSON.parse(localStorage.getItem('personajesGuardados')) || []
        personajesCarrito.push(...devolverPersonajesGuardados) 
        mostrarConteoPersonajes()
}

/*Agrego un contador en tiempo real que indica la cantidad de personajes seleccionados*/
function mostrarConteoPersonajes(){
    let contador = 0
        contador += personajesCarrito.length
        contadorCarrito.innerHTML = contador

}

