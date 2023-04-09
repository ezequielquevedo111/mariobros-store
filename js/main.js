
/* FUNCION QUE BUSCA UN PERSONAJE POR NOMBRE DE PERSONAJE*/
const buscarPersonaje = () => {
    let personajeAIngresar = prompt("Ingresa el nombre del personaje que deseas buscar: ").toLocaleLowerCase().trim()
    if(personajeAIngresar !== ""|| personajeAIngresar < 0 || personajeAIngresar > 0 || typeof personajeAIngresar === "undefined") {
        let personajeEncontrado = personajes.find((personaje)=> personaje.nombre == personajeAIngresar) 
        let seleccionarPersonaje = confirm("¿Deseas seleccionar el personaje encontrado?")
        if(seleccionarPersonaje == true)
        personajesCarrito.push(personajeEncontrado)
        return personajeEncontrado
        } 
    else{
        console.error("El personaje ingresado no es válido, por favor intente ingresar nuevamente el nombre del personaje que deseas buscar.")
    } 
}

/* FUNCION QUE BUSCA UN PERSONAJE POR VALOR DE PERSONAJE*/ 
const buscarValorPersonaje = () =>{
    let personajeAIngresar =  parseInt(prompt("Ingresa el valor del personaje que deseas buscar: "))
    let validarValor = personajes.some(personaje => personajeAIngresar === personaje.valor);
    if(personajeAIngresar !== "" && personajeAIngresar > 0 || personajeAIngresar < 1200 || personajeAIngresar === validarValor ){
        let personajeEncontrado = personajes.find((personaje) => personaje.valor == personajeAIngresar)
        console.log(personajeEncontrado)
        if (personajeEncontrado.length !== 0 || typeof personajeEncontrado === "undefined") {
            let seleccionarPersonajes = confirm("¿Deseas seleccionar los personajes encontrados?")
            if(seleccionarPersonajes == true){
            personajesCarrito.push(personajeEncontrado)
            return
        }   else{
            console.warn("No has seleccionado ningún personaje, intenta nuevamente.")
        }
        } else{
            console.error("El valor ingresado no corresponde con ningún personaje, intenta nuevamente.")
    } 
    }
}


/* FUNCION QUE FINALIZA LA COMPRA*/ 
const finalizarSeleccion = () =>{
    if(personajesCarrito.length === 0){
        return console.warn("El carrito está vacio, aún no has gastado ninguna moneda de Mario 🤨 💰")}
    const carritoLleno = new compraPersonaje(personajesCarrito)
    alert("Me parece que te has sacado todo lo que habia en tus bolsillos 🤑", "  El subtotal de tu compra es: ", carritoLleno.precioFinal())
    let compraAceptada = confirm("¿Ya casi puedes sentir todo el poder no? , ¿Deseas finalizar tu gloriosa adquisición? Yo se que si 😌")
    if(compraAceptada == true){
        alert("Gracias por tu compra, estoy seguro que ha válido la pena, tu pago se realizó por el total de: " + carritoLleno.precioFinal())
    }
}

/* FUNCION QUE INICIALIZA EL PROGRAMA */
const iniciarPersonaje = ()=> {
    let mensajeInicialPregunta = confirm("¿Deseas buscar un personaje?")
    if(mensajeInicialPregunta == true){
        let mensajeEleccion = confirm("¿Deseas buscar un personaje por su nombre?")
        if(mensajeEleccion == true) {
            buscarPersonaje()
            let mensajeContinuar = confirm("¿Deseas continuar eligiendo personajes?")
            if(mensajeContinuar == true){
                let mensajeSegundaOpcion  = confirm("¿Deseas continuar tu busqueda eligiendo personajes por el nombre?")
                if(mensajeSegundaOpcion == true){
                    buscarPersonaje()
                } else{
                    let mensajeTerceraOpcion = confirm("¿Deseas seguir tu busqueda eligiendo personajes por el valor?")
                    if(mensajeTerceraOpcion == true) {
                        buscarValorPersonaje()
                    }
                }
            } alert("Tu selección ha finalizado, ve al carrito para finalizar tu compra 💰")
            finalizarSeleccion()
            return
            
        } let mensajeEleccionValor = confirm("¿Deseas buscar un personaje por su valor?")
        if(mensajeEleccionValor == true){
            buscarValorPersonaje()
            let mensajeTerceraOpcion = confirm("¿Deseas seguir tu busqueda eligiendo personajes por el valor?")
                    if(mensajeTerceraOpcion == true) {
                        buscarValorPersonaje()
                    } 
                alert("Tu selección ha finalizado, ve al carrito para finalizar tu compra 💰")
                finalizarSeleccion()
                    return
        } else{
            console.error("No has seleccionado ningúna opción, intente nuevamente por favor.")
            iniciarPersonaje()
        }
        
        let mensajeEleccionDos = confirm("¿Deseas buscar un personaje por su valor?")
        if(mensajeEleccionDos == true) {
            buscarValorPersonaje()
        } else{
            console.error("No has seleccionado ningúna opción, intente nuevamente por favor.")
            iniciarPersonaje()
        }
    }
}


