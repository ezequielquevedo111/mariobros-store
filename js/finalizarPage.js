const carritoDePersonajes = []
const contenedorCardsCarrito = document.querySelector("div.contenedorCarrito")
const contadorCantidadCarrito = document.getElementById("contador")
const total = document.getElementById("total")
const botonFinalizar = document.getElementById("botonFinalizar")


function recuperarCarrito () {
    const devolverPersonajesGuardados = JSON.parse(localStorage.getItem('personajesGuardados')) || []
    devolverPersonajesGuardados.forEach(personaje => {
        carritoDePersonajes.push(personaje)
    });
    
}
function guardarCarrito () {
    localStorage.setItem('personajesGuardados', JSON.stringify(carritoDePersonajes))
}

recuperarCarrito()

function aplicarCardsCarrito (personaje) {
    return `<div class="personajeCard">
                <h3>${personaje.nombre}</h3>
                <img src="${personaje.imagen}" alt="">
                <div class="subCard">
                    <div><button class= "botonQuitar" id="${personaje.categoria}">Quitar del carrito</button></div>
                        <p>${personaje.valor}</p>
                    </div>
            </div> 
            `
            
}

function cargarCardsCarrito (carritoDePersonajes) {
    contenedorCardsCarrito.innerHTML = ""
    carritoDePersonajes.forEach(carritoDePersonaje => {
        contenedorCardsCarrito.innerHTML += aplicarCardsCarrito(carritoDePersonaje)
        
    });
    
    carritoDePersonajes.length <= 0 && mensajeCarritoVacio()
}



const mensajeCarritoVacio = () => {
    contenedorCardsCarrito.innerHTML = `
                                    <div class= "containerError">
                                        <h3>¡Ups!</h3>
                                        <h4>Aún no has seleccionado ningún personaje,<br> por favor ve al inicio para elegir tu personaje.</h4>
                                    </div>
                                `
}


function mostrarConteoPersonajes(){
    let contador = 0
    contador += carritoDePersonajes.length
    contadorCantidadCarrito.innerHTML = contador

}
mostrarConteoPersonajes()

const finalizarSeleccion = () =>{
    if(carritoDePersonajes.length !== 0){
        const carritoFinal = carritoDePersonajes.reduce((acc, personaje) => acc + personaje.valor, 0)
        return total.innerHTML = carritoFinal
    } else{
        mensajeCarritoVacio()
        total.innerHTML = "Vacio"
    }
}

finalizarSeleccion()

function buscarIndice()  {
    const botonesQuitar = document.querySelectorAll(".botonQuitar")
    for (const botonQuitar of botonesQuitar) {
        botonQuitar.addEventListener("click", () => {
            let personajeQuitado = []
            let i = carritoDePersonajes.findIndex((personaje) => personaje.categoria == botonQuitar.id)
            let personajeAQuitar = carritoDePersonajes.forEach((personaje) => {
                personajeQuitado = carritoDePersonajes[i].nombre 
            })
            carritoDePersonajes.splice(i, 1)
            Swal.fire({
                        text: 'Has quitado a ' + personajeQuitado,
                        toast: true,
                        position: 'bottom-right',
                        timer: 3000,
                        timerProgressBar: true,
                        background: '#e21414',
                        color: '#ffffff',
                        confirmButtonColor: '#151616',
                    })
            guardarCarrito(carritoDePersonajes)
            cargarCardsCarrito(carritoDePersonajes)
            mostrarConteoPersonajes(carritoDePersonajes.length)
            finalizarSeleccion()
            buscarIndice()
        })
        
    }
}

// function darMensajeError (){
//     let mensajeError = Swal.fire({
//         title: 'No has seleccionado ningún personaje',
//         icon: 'warning'
//     }) 
// }

function activarBotonFinal() {
    botonFinalizar.addEventListener("click", () => {
        let fin = Swal.fire({
            title: '¿Deseas finalizar tu compra?',
            showCancelButton: true,
            cancelButtonText: 'Cancelar',
            confirmButtonText: 'Finalizar',
            background: '#151616', 
            color: '#ffffff',
            confirmButtonColor: '#e21414',
        }).then((result) =>{
            if(result.isConfirmed && carritoDePersonajes.length > 0){
                carritoDePersonajes.length = 0
                guardarCarrito(carritoDePersonajes)
                cargarCardsCarrito(carritoDePersonajes)
                mostrarConteoPersonajes(carritoDePersonajes.length)
                finalizarSeleccion()
                Swal.fire({
                    toast: true,
                    text: 'Muchas gracias por tu compra.',
                    background: '#151616',
                    color: '#ffffff',
                    showConfirmButton: false,
                    timer: 1500,
                    timerProgressBar: true,
                }
                )
            } else if(result.isConfirmed && carritoDePersonajes.length <= 0) {
                Swal.fire({
                    toast: true,
                    text: 'No has seleccionado ningún personaje en tu carrito, dirigete al inicio.',
                    background: '#e21414',
                    color: '#ffffff',
                    showConfirmButton: false,
                    timer: 2000,
                    timerProgressBar: true,
                }
                )
            }
        } )
        
    })
}

cargarCardsCarrito(carritoDePersonajes)
carritoDePersonajes.length > 0 ? activarBotonFinal() : mensajeCarritoVacio()
carritoDePersonajes.length > 0 ? buscarIndice() : mensajeCarritoVacio()
