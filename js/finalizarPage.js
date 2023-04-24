const carritoDePersonajes = []
const contenedorCardsCarrito = document.querySelector("div.contenedorCarrito")
const contadorCantidadCarrito = document.getElementById("contador")
const total = document.getElementById("total")
const botonFinalizar = document.querySelector(".botonFinalizar")


function recuperarCarrito () {
    const devolverPersonajesGuardados = JSON.parse(localStorage.getItem('personajesGuardados')) || []
    devolverPersonajesGuardados.forEach(personaje => {
        carritoDePersonajes.push(personaje)
    });
    
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
        activarBotonQuitarPersonaje()
    });
}

cargarCardsCarrito(carritoDePersonajes)


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
        return total.innerHTML += carritoFinal
    } else{
        mensajeCarritoVacio()
        total.innerHTML = "Vacio"
    }
}

finalizarSeleccion()

function activarBotonQuitarPersonaje(){
    const botonesQuitar = document.querySelectorAll(".botonQuitar")
        for (const botonQuitar of botonesQuitar) {
            botonQuitar.addEventListener("click", () =>{
                let personajeQuitado = carritoDePersonajes.find(personaje => personaje.categoria === parseInt(botonQuitar.id))
                carritoDePersonajes.shift(personajeQuitado)
                
                cargarCardsCarrito(carritoDePersonajes)
                mostrarConteoPersonajes(carritoDePersonajes.length)
                finalizarSeleccion()
            } )
        } 
}

function activarBotonFinal() {
    botonFinalizar.addEventListener("click", () => {
        let fin = confirm("¿Deseas finalizar la tu compra?")
        if(fin === true){
            carritoDePersonajes.length = 0

        } else{
            alert("Algo ha salido mal, verifica por favor si has seleccionado algún personaje.")
        }
    })
}

activarBotonFinal()