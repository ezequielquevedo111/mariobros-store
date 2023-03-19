// -Primero necesito preguntar si  deseo buscar un personaje.
// -Una vez afirmativo procedo a inicilizar una funcion que pueda buscar el personaje
// -Dentro de la funcion creo un ciclo de waile que se ejecute mientras no que la coindicion sea o un espacio o un numero
// -Si el personaje que ingrese coincide con la busqueda lo muestro y lo guardo en una variable y genero otra variable que vaya contando cuantos
// personajes tengo seleccionado


// hacer 14 variables que guarden los elementos y luego comparar si lo ingresado es igual a alguna de esas variables

let personaje = ""
let cantidadDePersonajes = 0
let personajeUno = "mario bros"
let personajeDos = "luigi"
let personajeTres = "princess peach"
let personajeCuatro = "toad"
let personajeCinco = "bowser"
let personajeSeis = "yoshi"
let personajeSiete = "daisy"
let personajeOcho = "wario"
let personajeNueve = "waluigi"
let personajeDiez = "rosalina" 
let personajeOnce = "bowser jr"
let personajeDoce = "boo"
let personajeTrece = "doonkey kong"
let personajeCatorce = "doddy kong"

function inicializarBusqueda () {
    let preguntarBuscar = confirm("¿Deseas iniciar la busqueda de tu personaje?")
    while(preguntarBuscar) {
        buscarPersonajes ();
        preguntarBuscar = confirm ("¿Quieres continuar buscando personajes?")
    } console.log("Has finalizado la busqueda de tus personajes")
}

inicializarBusqueda();

function buscarPersonajes () {
    let ingresarPersonaje = prompt("Ingresa el nombre del personaje: ").toLowerCase()
    if(ingresarPersonaje === personajeUno || ingresarPersonaje === personajeDos || ingresarPersonaje === personajeTres || ingresarPersonaje === personajeCuatro || ingresarPersonaje === personajeCinco || ingresarPersonaje === personajeSeis || ingresarPersonaje === personajeSiete || ingresarPersonaje === personajeOcho || ingresarPersonaje === personajeNueve || ingresarPersonaje === personajeDiez || ingresarPersonaje === personajeOnce || ingresarPersonaje === personajeDoce || ingresarPersonaje === personajeTrece || ingresarPersonaje === personajeCatorce){
        personaje = ingresarPersonaje
        cantidadDePersonajes++;
        console.log("Has seleccionado a: " + personaje);
        console.log("Tienes " + cantidadDePersonajes + " personajes seleccionados.")
        console.log("El último personaje seleccionado es: " + personaje + " y has seleccionado el total de  " + cantidadDePersonajes)
        
        
    } else {
        console.error("El personaje ingresado es inválido")
    }
    
    
}
