const contenedorCardsCarrito = document.querySelector("div.contenedorCarrito")
const total = document.getElementById("total")
const botonFinalizar = document.getElementById("botonFinalizar")
devolverPersonajesCarrito()

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

function cargarCardsCarrito (personajesCarrito) {
    contenedorCardsCarrito.innerHTML = ""
    personajesCarrito.forEach(personaje => {
        contenedorCardsCarrito.innerHTML += aplicarCardsCarrito(personaje)
        
    });
    
    personajesCarrito.length <= 0 && mensajeCarritoVacio()
}

const mensajeCarritoVacio = () => {
    contenedorCardsCarrito.innerHTML = `
                                    <div class= "containerError">
                                        <h3>¡Ups!</h3>
                                        <h4>Aún no has seleccionado ningún personaje,<br> por favor ve al inicio para elegir tu personaje.</h4>
                                    </div>
                                `
}

mostrarConteoPersonajes()

const finalizarSeleccion = () =>{
    if(personajesCarrito.length !== 0){
        const carritoFinal = personajesCarrito.reduce((acc, personaje) => acc + personaje.valor, 0)
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
            let i = personajesCarrito.findIndex((personaje) => personaje.categoria == botonQuitar.id)
            let personajeAQuitar = personajesCarrito.forEach((personaje) => {
                personajeQuitado = personajesCarrito[i].nombre 
            })
            personajesCarrito.splice(i, 1)
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
            almacenarPersonajesCarrito(personajesCarrito)
            cargarCardsCarrito(personajesCarrito)
            mostrarConteoPersonajes(personajesCarrito.length)
            finalizarSeleccion()
            buscarIndice()
        })
        
    }
}

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
            if(result.isConfirmed && personajesCarrito.length > 0){
                personajesCarrito.length = 0
                almacenarPersonajesCarrito(personajesCarrito)
                cargarCardsCarrito(personajesCarrito)
                mostrarConteoPersonajes(personajesCarrito.length)
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
            } else if(result.isConfirmed && personajesCarrito.length <= 0) {
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

cargarCardsCarrito(personajesCarrito)
personajesCarrito.length > 0 ? activarBotonFinal() : mensajeCarritoVacio()
personajesCarrito.length > 0 ? buscarIndice() : mensajeCarritoVacio()
