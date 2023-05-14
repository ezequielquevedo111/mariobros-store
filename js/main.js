const sectionContainer = document.querySelector('.sectionContainer')
const inputBuscador = document.querySelector('input#inputBusqueda')

async function traerPersonajes() {
    try{
        const respuesta = await fetch(UrlJson)
        const data = await respuesta.json()
            personajes.push(...data)
            cargarCardsHtml(personajes)
    }
    catch(error){
        errorBusqueda()
    }
    
}
traerPersonajes()

/*Funcion principal de busqueda*/
const buscarNombrePersonaje = (personajeIngresado) => {
    const personajeEncontrado = personajes.filter((personaje) => personaje.nombre.toLowerCase().includes(personajeIngresado.toLowerCase().trim()))
        personajeEncontrado.length > 0 ? cargarCardsHtml(personajeEncontrado) : errorBusqueda()
}

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
/*Cargo las cards*/
function cargarCardsHtml(personajes){
    sectionContainer.innerHTML = ""
    personajes.forEach((personaje) => {
            sectionContainer.innerHTML += aplicarCardsHtml(personaje)
        });
            activarBotonSeleccionarPersonaje()
}

devolverPersonajesCarrito()

inputBuscador.addEventListener("search", (e) =>{
    buscarNombrePersonaje(e.target.value)
})

/*Activo el boton para agregar los personajes con el evento*/
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




