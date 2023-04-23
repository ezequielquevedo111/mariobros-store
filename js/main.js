
// Funciones Principales //

const buscarNombrePersonaje = (personajeIngresado) => {
    const personajeEncontrado = personajes.filter((personaje) => personaje.nombre.toLowerCase().includes(personajeIngresado.toLowerCase().trim()))
    personajeEncontrado.length > 0 ? cargarCardsHtml(personajeEncontrado) : errorBusqueda()
}


const buscarValorPersonaje = (personajeIngresado) =>{
    parseInt(personajeIngresado)
    const personajeEncontrado = personajes.filter((personaje) => personaje.valor === personajeIngresado)
    personajeEncontrado.length > 0 ? cargarCardsHtml(personajeEncontrado) : errorBusqueda()
    
}


// Cargar Cards y Eventos DOM//

// DOM index//
const sectionContainer = document.querySelector('.sectionContainer')
const contadorSeleccion = document.querySelector('p#contador')
const inputBuscador = document.querySelector('input#inputBusqueda')


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
                        <div><button class= "botonAñadir" id="${personaje.categoria}">Añadir al carrito</button></div>
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
    
    
    
}

cargarCardsHtml(personajes)

inputBuscador.addEventListener("search", (e) =>{
    buscarNombrePersonaje(e.target.value)
})


function activarBotones(){
    const botonesAñadir = document.querySelector(".botonAñadir")
        for (const botonAñadir  of botonesAñadir) {
            botonAñadir.onclick = (personajes) =>{
                let personajeEncontrado = personajes.find(personaje => personaje.categoria === parseInt(botonAñadir.categoria))
                personajesCarrito.push(personajeEncontrado)
                console.table(personajeEncontrado)
            }
        }
}

activarBotones()





// DOM index//

// DOM carrito-html//
const containerCarrito = document.querySelector('.containerCarrito')

function aplicarCardsCarrito (personajesCarrito) {
    return ` <h2>Personajes Seleccionados</h2>
                <div class="personajeCardCarrito">
                    <div>
                        <h3>${personajesCarrito.nombre}</h3>
                        <img src="${personajesCarrito.imagen}" alt="">
                    </div>
                    <p>Cantidad: 1</p>
                    <p>${personajesCarrito.valor}</p>
                </div>
            `
}

function cargarCardCarrito (personajesCarrito){
    containerCarrito.innerHTML = ""
    personajesCarrito.forEach((personaje) =>{
        containerCarrito.innerHTML += aplicarCardsCarrito(personaje) 
    })
}

// DOM carrito-html//





// Cargar Cards y Eventos DOM//






/* FUNCION QUE FINALIZA LA COMPRA*/ 
// const finalizarSeleccion = () =>{
//     if(personajesCarrito.length === 0){
//         return console.warn("El carrito está vacio, aún no has gastado ninguna moneda de Mario 🤨 💰")}
//         //mostrar funcion que retorne card que indique que el carrito esta vacio//
//     const carritoLleno = new compraPersonaje(personajesCarrito)
//     //modificar alerta por lo que es una libreria que me muestre el cartel para finalizar y eso lo vinculo, una vez confirmado que 
//     //vacie el carrito
//     alert("Me parece que te has sacado todo lo que habia en tus bolsillos 🤑", "  El subtotal de tu compra es: ", carritoLleno.precioFinal())
//     let compraAceptada = confirm("¿Ya casi puedes sentir todo el poder no? , ¿Deseas finalizar tu gloriosa adquisición? Yo se que si 😌")
//     if(compraAceptada == true){
//         alert("Gracias por tu compra, estoy seguro que ha válido la pena, tu pago se realizó por el total de: " + carritoLleno.precioFinal())
//     }
// }



//primero recorre el resulktado de personajes encontrados con un for o foreach, porque sino lo que estas pusheando es un array
//tenes que hacer un push por cada personaje en el array personajeencontrado

/* FUNCION QUE BUSCA UN PERSONAJE POR VALOR DE PERSONAJE*/ 
// const buscarValorPersonaje = () =>{
//     let personajeAIngresar =  parseInt(prompt("Ingresa el valor del personaje que deseas buscar: "))
//     let validarValor = personajes.some(personaje => personajeAIngresar === personaje.valor);
//     if(personajeAIngresar !== "" && personajeAIngresar > 0 || personajeAIngresar < 1200 || personajeAIngresar === validarValor ){
//         let personajeEncontrado = personajes.find((personaje) => personaje.valor == personajeAIngresar)
//         console.log(personajeEncontrado)
//         if (personajeEncontrado.length !== 0 || typeof personajeEncontrado === "undefined") {
//             let seleccionarPersonajes = confirm("¿Deseas seleccionar los personajes encontrados?")
//             if(seleccionarPersonajes == true){
//                 
//                 forEach()
//                 personajesCarrito.push(personajeEncontrado)
//                 return
//         }   else{
//             console.warn("No has seleccionado ningún personaje, intenta nuevamente.")
//         }
//         } else{
//             console.error("El valor ingresado no corresponde con ningún personaje, intenta nuevamente.")
//     } 
//     }
// }


// const buscarGeneroPersonaje = () => {
//     let personajeAIngresar = parseInt(prompt("Ingresa el genero del personaje que deseas buscar: "))
//     let validarValor = personajes.some(personaje => personajeAIngresar === personaje.genero)
//     if(validarValor){
//         let personajeEncontrado = personajes.filter((personaje) => personaje.genero === personajeAIngresar)
//         return console.table(personajeEncontrado)
//     }
// }

/*SIMPLIFICAR FUNCIONES CON UNA SOLA FUNCION Y NO MAS
en el spam ir actualizandolo mediante la plantilla literal
y ponerle que muestre el punto length del carrito
*/



/* FUNCION QUE BUSCA UN PERSONAJE POR NOMBRE DE PERSONAJE*/
// const buscarPersonaje = () => {
//     let personajeAIngresar = input
//     if(personajeAIngresar !== ""|| personajeAIngresar < 0 || personajeAIngresar > 0 || typeof personajeAIngresar !== "undefined") {
//         let personajeEncontrado = personajes.find((personaje)=> personaje.nombre == personajeAIngresar) 
//         if(personajeEncontrado){
//             cargarCardsHtml(personajeEncontrado)
//         }
//         let seleccionarPersonaje = confirm("¿Deseas seleccionar el personaje encontrado?")
//         if(seleccionarPersonaje == true)
//         personajesCarrito.push(personajeEncontrado)
//         return personajeEncontrado
//         } 
//     else{
//         console.error("El personaje ingresado no es válido, por favor intente ingresar nuevamente el nombre del personaje que deseas buscar.")
//     } 
// }



/* FUNCION QUE INICIALIZA EL PROGRAMA */
// const iniciarPersonaje = ()=> {
//     let mensajeInicialPregunta = confirm("¿Deseas buscar un personaje?")
//     if(mensajeInicialPregunta == true){
//         let mensajeEleccion = confirm("¿Deseas buscar un personaje por su nombre?")
//         if(mensajeEleccion == true) {
//             buscarPersonaje()
//             let mensajeContinuar = confirm("¿Deseas continuar eligiendo personajes?")
//             if(mensajeContinuar == true){
//                 let mensajeSegundaOpcion  = confirm("¿Deseas continuar tu busqueda eligiendo personajes por el nombre?")
//                 if(mensajeSegundaOpcion == true){
//                     buscarPersonaje()
//                 } else{
//                     let mensajeTerceraOpcion = confirm("¿Deseas seguir tu busqueda eligiendo personajes por el valor?")
//                     if(mensajeTerceraOpcion == true) {
//                         buscarValorPersonaje()
//                     }
//                 }
//             } alert("Tu selección ha finalizado, ve al carrito para finalizar tu compra 💰")
//             finalizarSeleccion()
//             return
            
//         } let mensajeEleccionValor = confirm("¿Deseas buscar un personaje por su valor?")
//         if(mensajeEleccionValor == true){
//             buscarValorPersonaje()
//             let mensajeTerceraOpcion = confirm("¿Deseas seguir tu busqueda eligiendo personajes por el valor?")
//                     if(mensajeTerceraOpcion == true) {
//                         buscarValorPersonaje()
//                     } 
//                 alert("Tu selección ha finalizado, ve al carrito para finalizar tu compra 💰")
//                 finalizarSeleccion()
//                     return
//         } else{
//             console.error("No has seleccionado ningúna opción, intente nuevamente por favor.")
//             iniciarPersonaje()
//         }
        
//         let mensajeEleccionDos = confirm("¿Deseas buscar un personaje por su valor?")
//         if(mensajeEleccionDos == true) {
//             buscarValorPersonaje()
//         } else{
//             console.error("No has seleccionado ningúna opción, intente nuevamente por favor.")
//             iniciarPersonaje()
//         }
//     }
// }





/*Una vez que haya seleccionado la seleccion del objeto hay lo guardo en el local storage 
y ademas debo conectar el spam del html para que directamente vaya modificando el numero
de manera dinamica y coincida con la cantidad de personajes que yo haya seleccionado 
anteriormente.

Generar las cards del carrito en una funcion de cargar como realice anteriormente
pero en este caso ponerle el condicional que si directamente tiene objetos guardados
ahi si cree la cantidad exacta que hay segun la cantidad de items agregados al carrito
y al local storage.

En el caso que no haya nada que directamente agregue un div con el innerhtml por el cual
indique en un cartel que no hay objetos agregados
tambien puedo agregarle eso al la funcion cuando se ejecuta y no encuentra ninguna coincidencia.

*/