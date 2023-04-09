/* CLASES DE JAVASCRIPT Y VARIABLES GLOBALES*/

const personajesCarrito = []

const personajes = [{nombre: "mario bros", genero: "masculino", especie: "humano", vivienda: "reino champiñon", valor: 1100},
                    {nombre: "luigi", genero: "masculino ", especie: "humano", vivienda: "reino champiñón", valor: 950},
                    {nombre: "princess peach", genero: "femenino", especie: "humano", vivienda: "reino champiñon", valor: 1040},
                    {nombre: "toad", genero: "másculino", especie: "toad", vivienda: "reino champiñon", valor: 500},
                    {nombre: "bowser", genero: "másculino", especie: "koopa", vivienda: "castillo de bowser", valor: 750},
                    {nombre: "yoshi", genero: "másculino", especie: "yoshi", vivienda: "isla yoshi", valor: 800},
                    {nombre: "daisy", genero: "femenino", especie: "humano", vivienda: "reino sarasaland", valor: 1020},
                    {nombre: "wario", genero: "másculino", especie: "humano", vivienda: "reino champiñon", valor: 1150},
                    {nombre: "waluigi", genero: "másculino", especie: "humano", vivienda: "reino champiñon", valor: 900},
                    {nombre: "rosalina", genero: "femenino", especie: "humano-mago", vivienda: "planetarium del cometa", valor: 1000},
                    {nombre: "bowser jr", genero: "másculino", especie: "koopa", vivienda: "castillo de bowser", valor: 510},
                    {nombre: "boo", genero: "másculino-femenino", especie: " boo", vivienda: "diferente", valor: 450},
                    {nombre: "doonkey kong", genero: "másculino", especie: "gorila ", vivienda: "", valor: 850},
                    {nombre: "diddy kong", genero: "másculino", especie: "chimpance", vivienda: "diferente", valor: 525},
                    {nombre: "goomba", genero: "diferente", especie: "hongo", vivienda: "reino champiñon", valor: 300},
                    {nombre: "kirby", genero: "másculino", especie: "desconocido", vivienda: "pop star", valor: 400}
]

class compraPersonaje {
    constructor(personajesCarrito){
        this.carritoFinal = personajesCarrito
    }
    precioFinal() {
        if(this.carritoFinal.length > 0){
            return this.carritoFinal.reduce((acc, personaje1) => acc + personaje1.valor, 0)
        }
    }
}
