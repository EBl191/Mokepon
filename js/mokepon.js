const sectionSeleccionarAtaque = document.getElementById("seleccionar_ataque")
const sectionReiniciar = document.getElementById("reiniciar")
const botonMascotaJugador = document.getElementById("boton_mascota")
const botonReiniciarJuego = document.getElementById("boton_reiniciar")
const sectionSeleccionarMascota=document.getElementById('seleccionar-mascota')
const imagenMascotaJugador = document.getElementById("containerJugador")
const imagenMsascotaEnemigo = document.getElementById("containerEnemigo")
const spanVidasJugador = document.getElementById("vidas_jugador")
const spanVidasEnemigo = document.getElementById("vidas_enemigo")
const sectionMensajes = document.getElementById("resultado")
const sectionataquesDelJugador = document.getElementById("ataquesDelJugador")
const sectionataquesDelEnemigo = document.getElementById("ataquesDelEnemigo")
const contenedorTarjetas = document.getElementById("contenedorTarjetas")
const contenedorAtaques = document.getElementById("contenedorAtaques")
const sectionVerMapa = document.getElementById("ver_mapa")
const mapa = document.getElementById("mapa")

let mokepones = []
let ataqueDeJugador = []
let ataqueEnemigo = []
let opcionDeMokepones
let inputHydrokyon 
let inputLitomyse
let inputDracornitus
let inputSerpyctus
let inputSalamander
let inputGeoignis
let mascotaJugador
let mascotaJugadorObject
let enemigo
let ataquesMokepon
let ataquesMokeponEnemigo
let botonFuego 
let botonAgua 
let botonTierra 
let botones = []
let indexAtaqueDeJugador
let indexAtaqueEnemigo
let victoriasJugador = 0
let victoriasEnemigo = 0
let lienzo = mapa.getContext("2d")
let intervalo
let mapaBackground = new Image()
mapaBackground.src = "./images/mokemap.png"
// let desiredHeight
// let mapsWidth = window.innerWidth - 20

// desiredHeight = mapsWidth * 600 / 800

// mapa.width = mapsWidth
// mapa.height = desiredHeight

class Mokepon {
    constructor(nombre, foto, victorias,fotoMapa, x = 10, y = 10) {
        this.nombre = nombre
        this.foto = foto
        this.victorias = victorias
        this.ataques = []
        this.ancho = 30
        this.alto = 30
        this.x = x
        this.y = y
        this.mapaFoto = new Image()
        this.mapaFoto.src = fotoMapa
        this.velocidadX = 0
        this.velocidadY = 0
    }

    pintarMokepon() {
        lienzo.drawImage(
            this.mapaFoto,
            this.x,
            this.y,
            this.ancho,
            this.alto
        )
    }
}

let hydrokyon = new Mokepon("Hydrokyon", "./images/hydrokyon.png", 5, "./images/hydrokyon.png")
let litomyse = new Mokepon("Litomyse", "./images/litomyse.png", 5, "./images/litomyse.png")
let dracornitus = new Mokepon("Dracornitus", "./images/dracornitus.png", 5, "./images/dracornitus.png")
let serpyctus = new Mokepon("Serpyctus", "./images/serpyctus.png", 5, "./images/serpyctus.png")
let salamander = new Mokepon("Salamander", "./images/salamander.png", 5, "./images/salamander.png")
let geoignis = new Mokepon("Geoignis", "./images/geoignis.png", 5, "./images/geoignis.png")

let hydrokyonEnemigo = new Mokepon("Hydrokyon", "./images/hydrokyon.png", 5, "./images/hydrokyon.png", 250, 40 )
let litomyseEnemigo = new Mokepon("Litomyse", "./images/litomyse.png", 5, "./images/litomyse.png", 100, 120)
let dracornitusEnemigo = new Mokepon("Dracornitus", "./images/dracornitus.png", 5, "./images/dracornitus.png", 130, 30)
let serpyctusEnemigo = new Mokepon("Serpyctus", "./images/serpyctus.png", 5, "./images/serpyctus.png", 200, 100)
let salamanderEnemigo = new Mokepon("Salamander", "./images/salamander.png", 5, "./images/salamander.png", 10, 100)
let geoignisEnemigo = new Mokepon("Geoignis", "./images/geoignis.png", 5, "./images/geoignis.png", 60, 60) 

hydrokyon.ataques.push(
    { nombre: "????", id: "boton_agua" },
    { nombre: "????", id: "boton_agua" },
    { nombre: "????", id: "boton_agua" },
    { nombre: "????", id: "boton_fuego" },
    { nombre: "????", id: "boton_tierra" }
)

hydrokyonEnemigo.ataques.push(
    { nombre: "????", id: "boton_agua" },
    { nombre: "????", id: "boton_agua" },
    { nombre: "????", id: "boton_agua" },
    { nombre: "????", id: "boton_fuego" },
    { nombre: "????", id: "boton_tierra" }
)

litomyse.ataques.push(
    { nombre: "????", id: "boton_tierra"},
    { nombre: "????", id: "boton_tierra"},
    { nombre: "????", id: "boton_tierra"},
    { nombre: "????", id: "boton_agua"},
    { nombre: "????", id: "boton_fuego"}
)

litomyseEnemigo.ataques.push(
    { nombre: "????", id: "boton_tierra"},
    { nombre: "????", id: "boton_tierra"},
    { nombre: "????", id: "boton_tierra"},
    { nombre: "????", id: "boton_agua"},
    { nombre: "????", id: "boton_fuego"}
)

dracornitus.ataques.push(
    { nombre: "????", id: "boton_fuego"},
    { nombre: "????", id: "boton_fuego"},
    { nombre: "????", id: "boton_fuego"},
    { nombre: "????", id: "boton_tierra"},
    { nombre: "????", id: "boton_agua"}
)

dracornitusEnemigo.ataques.push(
    { nombre: "????", id: "boton_fuego"},
    { nombre: "????", id: "boton_fuego"},
    { nombre: "????", id: "boton_fuego"},
    { nombre: "????", id: "boton_tierra"},
    { nombre: "????", id: "boton_agua"}
)

serpyctus.ataques.push(
    { nombre: "????", id: "boton_agua"},
    { nombre: "????", id: "boton_agua"},
    { nombre: "????", id: "boton_agua"},
    { nombre: "????", id: "boton_tierra"},
    { nombre: "????", id: "boton_tierra"}
)

serpyctusEnemigo.ataques.push(
    { nombre: "????", id: "boton_agua"},
    { nombre: "????", id: "boton_agua"},
    { nombre: "????", id: "boton_agua"},
    { nombre: "????", id: "boton_tierra"},
    { nombre: "????", id: "boton_tierra"}
)

salamander.ataques.push(
    { nombre: "????", id: "boton_agua"},
    { nombre: "????", id: "boton_agua"},
    { nombre: "????", id: "boton_agua"},
    { nombre: "????", id: "boton_fuego"},
    { nombre: "????", id: "boton_tierra"}
)

salamanderEnemigo.ataques.push(
    { nombre: "????", id: "boton_agua"},
    { nombre: "????", id: "boton_agua"},
    { nombre: "????", id: "boton_agua"},
    { nombre: "????", id: "boton_fuego"},
    { nombre: "????", id: "boton_tierra"}
)

geoignis.ataques.push(
    { nombre: "????", id: "boton_tierra"},
    { nombre: "????", id: "boton_fuego"},
    { nombre: "????", id: "boton_tierra"},
    { nombre: "????", id: "boton_fuego"},
    { nombre: "????", id: "boton_tierra"}
)

geoignisEnemigo.ataques.push(
    { nombre: "????", id: "boton_tierra"},
    { nombre: "????", id: "boton_fuego"},
    { nombre: "????", id: "boton_tierra"},
    { nombre: "????", id: "boton_fuego"},
    { nombre: "????", id: "boton_tierra"}
)

mokepones.push(hydrokyon, litomyse, dracornitus, serpyctus, salamander, geoignis)

function iniciarJuego() {
    
    sectionSeleccionarAtaque.style.display = "none"
    sectionReiniciar.style.display = "none"
    sectionVerMapa.style.display = "none"
   
    mokepones.forEach((mokepon)=>{
        opcionDeMokepones = `
        <input type="radio" name="mascota" id=${mokepon.nombre} />
        <label class="tarjeta-de-mokepon" for=${mokepon.nombre}> 
            <p>${mokepon.nombre}</p>
            <img class="img_mokepon" src=${mokepon.foto} alt=${mokepon.nombre} />
        </label>
        `
        contenedorTarjetas.innerHTML += opcionDeMokepones

        inputHydrokyon=document.getElementById("Hydrokyon")
        inputLitomyse=document.getElementById("Litomyse")
        inputDracornitus=document.getElementById("Dracornitus")
        inputSerpyctus=document.getElementById("Serpyctus")
        inputSalamander=document.getElementById("Salamander")
        inputGeoignis=document.getElementById("Geoignis")
    })

    botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador)
    botonReiniciarJuego.addEventListener('click', reiniciarJuego)
   }

function seleccionarMascotaJugador() {
    
    sectionSeleccionarMascota.style.display='none'
    
        
    if (inputHydrokyon.checked) {
        imagenMascotaJugador.innerHTML= `
        <img class="img_mokepon" src="./images/hydrokyon.png" alt="Hydrokyon" />
        <p>${inputHydrokyon.id}</p>
        `    
        mascotaJugador = inputHydrokyon.id
    } else if (inputLitomyse.checked) {
        imagenMascotaJugador.innerHTML = `
        <img class="img_mokepon" src="./images/litomyse.png" alt="Litomyse" />
        <p>${inputLitomyse.id}</p>
        `
        mascotaJugador = inputLitomyse.id
    } else if (inputDracornitus.checked) {
        imagenMascotaJugador.innerHTML = `
        <img class="img_mokepon" src="./images/dracornitus.png" alt="Dracornitus" />
        <p>${inputDracornitus.id}</p>
        `
        mascotaJugador = inputDracornitus.id
    }   else if (inputSerpyctus.checked) {
        imagenMascotaJugador.innerHTML = `
        <img class="img_mokepon" src="./images/serpyctus.png" alt="Serpyctus" />
        <p>${inputSerpyctus.id}</p>
        `
        mascotaJugador = inputSerpyctus.id
    }   else if (inputSalamander.checked) {
        imagenMascotaJugador.innerHTML = `
        <img class="img_mokepon" src="./images/salamander.png" alt="Salamander" />
        <p>${inputSalamander.id}</p>
        `
        mascotaJugador = inputSalamander.id
    }   else if (inputGeoignis.checked) {
        imagenMascotaJugador.innerHTML = `
        <img class="img_mokepon" src="./images/geoignis.png" alt="Geoignis" />
        <p>${inputGeoignis.id}</p>
        `
        mascotaJugador = inputGeoignis.id
    }    else {
        alert("Marque una de las opciones para elegir su mascota")
    }
    extraerAtaques(mascotaJugador)
    sectionVerMapa.style.display = "flex"
    iniciarMapa()
}

function extraerAtaques(mascotaJugador){
    let ataques
    for (let i = 0; i < mokepones.length; i++) {
        if (mascotaJugador === mokepones[i].nombre) {
            ataques = mokepones[i].ataques
        }
    }
    mostrarAtaques(ataques)
}

function mostrarAtaques(ataques) {
    ataques.forEach((ataque) => {
        ataquesMokepon =  `
        <button id=${ataque.id} class="boton-de-ataque BAtaque">${ataque.nombre}</button>
        `
        contenedorAtaques.innerHTML += ataquesMokepon
    })
botonFuego = document.getElementById("boton_fuego")
botonAgua = document.getElementById("boton_agua")
botonTierra = document.getElementById("boton_tierra")
botones = document.querySelectorAll(".BAtaque")

}

function secuenciaAtaque() {
    botones.forEach((boton) => {
        boton.addEventListener("click", (e) => {
           if (e.target.textContent === "????") {
               ataqueDeJugador.push("FUEGO ????")
               sectionataquesDelJugador.innerHTML = `
               <p>${ataqueDeJugador.map(ataque => ataque).join("<br /> ")}</p>
           `
            console.log(ataqueDeJugador)
               boton.style.background = "#112f58"
               boton.disabled = true
   
           } else if (e.target.textContent === "????") {
            ataqueDeJugador.push("AGUA ????")
            sectionataquesDelJugador.innerHTML = `
            <p>${ataqueDeJugador.map(ataque => ataque).join("<br /> ")}</p>
        `
            console.log(ataqueDeJugador)
            boton.style.background = "#112f58"
            boton.disabled = true
           } else {
            ataqueDeJugador.push("TIERRA ????")
            sectionataquesDelJugador.innerHTML = `
            <p>${ataqueDeJugador.map(ataque => ataque).join("<br /> ")}</p>
        `
            console.log(ataqueDeJugador)
            boton.style.background = "#112f58"
            boton.disabled = true
           }
           ataqueAleatorioEnemigo()
        })
    })
}

function seleccionarMascotaEnemigo(enemigo) {

   ataquesMokeponEnemigo = enemigo.ataques
    
    imagenMsascotaEnemigo.innerHTML=`
        <img class="img_mokepon" src=${enemigo.foto} alt=${enemigo.nombre} />
        <p>${enemigo.nombre}</p>
       `
    // ataquesMokeponEnemigo = enemigo.ataques
    secuenciaAtaque()
}

function ataqueAleatorioEnemigo() {
    let ataqueAleatorio = aleatorio(0, ataquesMokeponEnemigo.length -1)

    if (ataqueAleatorio == 0 || ataqueAleatorio == 1) {
        ataqueEnemigo.push("FUEGO ????")
        sectionataquesDelEnemigo.innerHTML = `
        <p>${ataqueEnemigo.map(ataque => ataque).join("<br /> ")}</p>
    `
    } else if (ataqueAleatorio == 3 || ataqueAleatorio == 4) {
        ataqueEnemigo.push("AGUA ????") 
        sectionataquesDelEnemigo.innerHTML = `
        <p>${ataqueEnemigo.map(ataque => ataque).join("<br /> ")}</p>
    `
    } else {
        ataqueEnemigo.push("TIERRA ????")
        sectionataquesDelEnemigo.innerHTML = `
        <p>${ataqueEnemigo.map(ataque => ataque).join("<br /> ")}</p>
    `
    }
    console.log(ataqueEnemigo)
    iniciarCombate()
}

function iniciarCombate() {
    if (ataqueDeJugador.length === 5) {
        resultadoCombate()
    }
}

function indexBoth(jugador, enemigo) {
    indexAtaqueDeJugador = ataqueDeJugador[jugador]
    indexAtaqueEnemigo = ataqueEnemigo[enemigo]
}

function resultadoCombate() {
    
    for (let index = 0; index < ataqueDeJugador.length; index++) {
        if(ataqueDeJugador[index] === ataqueEnemigo[index]) {
            indexBoth(index, index)
            crearMensaje("EMPATE")

        } else if(ataqueDeJugador[index] === "FUEGO ????" && ataqueEnemigo[index] === "TIERRA ????") {
            indexBoth(index, index)
            crearMensaje("GANASTE")
            victoriasJugador++
            spanVidasJugador.innerHTML = victoriasJugador

        } else if(ataqueDeJugador[index] === "AGUA ????" && ataqueEnemigo[index] === "FUEGO ????") {
            indexBoth(index, index)
            crearMensaje("GANASTE")
            victoriasJugador++
            spanVidasJugador.innerHTML = victoriasJugador

        } else if(ataqueDeJugador[index] === "TIERRA ????" && ataqueEnemigo[index] === "AGUA ????") {
            indexBoth(index, index)
            crearMensaje("GANASTE")
            victoriasJugador++
            spanVidasJugador.innerHTML = victoriasJugador
        } else {
            crearMensaje("PERDISTE")
            victoriasEnemigo++
            spanVidasEnemigo.innerHTML = victoriasEnemigo
        }
        revisarVictorias()
    }


}

function revisarVictorias() {
    if (victoriasJugador === victoriasEnemigo) {
        crearMensajeFinal("Esto fue un empate")
    } else if (victoriasJugador > victoriasEnemigo) {
        crearMensajeFinal("??FELICIDADES! GANASTE ????????")
    } else {
        crearMensajeFinal("Lo siento, perdiste ????")
    }
}

function crearMensaje(resultado) {
       
    let nuevoAtaqueJugador = document.createElement("p")
    let nuevoAtaqueDelEnemigo =  document.createElement("p")

   sectionMensajes.innerHTML = resultado
//    nuevoAtaqueJugador.innerHTML = indexAtaqueDeJugador
//    nuevoAtaqueDelEnemigo.innerHTML = indexAtaqueEnemigo
   sectionataquesDelJugador.appendChild(nuevoAtaqueJugador)
   sectionataquesDelEnemigo.appendChild(nuevoAtaqueDelEnemigo)
}

function crearMensajeFinal(resultadoFinal) {
    
    sectionMensajes.innerHTML = resultadoFinal
   
    
    sectionReiniciar.style.display = "block"
}

function reiniciarJuego() {
    location.reload()
}

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min +1) + min)
}

function pintarCanvas() {
    mascotaJugadorObject.x = mascotaJugadorObject.x + mascotaJugadorObject.velocidadX
    mascotaJugadorObject.y = mascotaJugadorObject.y + mascotaJugadorObject.velocidadY
    lienzo.clearRect(0, 0, mapa.width, mapa.height)
    lienzo.drawImage(
        mapaBackground,
        0,
        0,
        mapa.width,
        mapa.height
    )
    mascotaJugadorObject.pintarMokepon()
    hydrokyonEnemigo.pintarMokepon()
    litomyseEnemigo.pintarMokepon()
    dracornitusEnemigo.pintarMokepon()
    geoignisEnemigo.pintarMokepon()
    serpyctusEnemigo.pintarMokepon()
    salamanderEnemigo.pintarMokepon()
    if(mascotaJugadorObject.velocidadX !== 0 || mascotaJugadorObject.velocidadY !== 0) { revisarColision(hydrokyonEnemigo)
         revisarColision(litomyseEnemigo)
         revisarColision(dracornitusEnemigo)
         revisarColision(serpyctusEnemigo)
         revisarColision(salamanderEnemigo)
        revisarColision(geoignisEnemigo)}
}

function moverDerecha(){mascotaJugadorObject.velocidadX =5
    }
function moverIzquierda(){mascotaJugadorObject.velocidadX= -5}
function moverAbajo(){mascotaJugadorObject.velocidadY = 5}
    
function moverArriba(){mascotaJugadorObject.velocidadY = -5
}

function detenerMovimiento(){
    mascotaJugadorObject.velocidadX = 0
    mascotaJugadorObject.velocidadY = 0
}

function pKey(event) {
    switch (event.key) {
        case "ArrowUp":
            moverArriba()
            break
        case "ArrowDown":
            moverAbajo()
            break
        case "ArrowLeft":
            moverIzquierda()
            break
        case "ArrowRight":
            moverDerecha()
            break
        default:
            break;
    }
}

function iniciarMapa() {
    mascotaJugadorObject = getObjectMokepon(mascotaJugador)
    
    intervalo = setInterval(pintarCanvas, 50)

    window.addEventListener("keydown", pKey)

    window.addEventListener("keyup", detenerMovimiento)
}

function getObjectMokepon() {
    for (let i = 0; i < mokepones.length; i++) {
        if (mascotaJugador === mokepones[i].nombre) {
            return mokepones [i]
        }
    }
}

function revisarColision(enemigo) {
    const arribaEnemigo = enemigo.y
    const abajoEnemigo = enemigo.y + enemigo.alto
    const derechaEnemigo = enemigo.x + enemigo.ancho
    const izquierdaEnemigo = enemigo.x

    const arribaMascota = 
        mascotaJugadorObject.y
    const abajoMascota = 
        mascotaJugadorObject.y + mascotaJugadorObject.alto
    const derechaMascota = 
        mascotaJugadorObject.x + mascotaJugadorObject.ancho
    const izquierdaMascota = 
        mascotaJugadorObject.x

    if(
        abajoMascota < arribaEnemigo ||
        arribaMascota > abajoEnemigo ||
        derechaMascota < izquierdaEnemigo ||
        izquierdaMascota > derechaEnemigo
    ) {
        return
    }

    detenerMovimiento()
    clearInterval(intervalo)
    sectionSeleccionarAtaque.style.display = "flex"
    sectionVerMapa.style.display = "none"
    seleccionarMascotaEnemigo(enemigo)

}

window.addEventListener("load", iniciarJuego)
