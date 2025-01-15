let canvas;
let ctx;
let FPS = 50;

let ampleCanvas = 400
let altCanvas = 640

let ampleF = 40;
let altF = 40;

let ampleTaulell = 10;
let altTaulell = 16;

let peça;

let objPeça = function (){
    this.x = 0;
    this.y = 0;

    console.log("Peça creada")
}

let taulell = [
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,1,1,1,1,1,1,1,1,1,1,1],
]


function inicializar(){
    canvas = document.getElementById("canvas");
    ctx = canvas.getContext("2d");

    canvas.width = ampleCanvas;
    canvas.height = altCanvas;

    peça = new objPeça()

    inicializarTeclat();

    setInterval(function(){
        principal();
    },1000/FPS

    )
}

function principal(){
    console.log("BUCLE")
    borrarPantalla();
}

function borrarPantalla(){
    canvas.width = ampleCanvas;
    canvas.height = altCanvas;

}

function inicializarTeclat(){
    document. addEventListener("keydown",function(tecla){
        if(tecla.key == "ArrowUp"){
            console.log("UP")
        }
        if(tecla.key == "ArrowDown"){
            console.log("DOWN")
        }
        if(tecla.key == "ArrowRight"){
            console.log("RIGHT")
        }
        if(tecla.key == "ArrowLeft"){
            console.log("LEFT")
        }

        
    })
}