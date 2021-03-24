import {IMAGES as images, mainInterval} from './initialize.js'
import {ctx, canvas, drawObj, run, start, dT} from './initialize.js'
let t = 0;
let score = 0;
let zonas = [];
let zona1 = {
    x:0,
    y:0,
    vX: 50,
    vY: 0,
    direccion: "derecha",

    dibujarse:function(){
        ctx.fillStyle = "orange";
        ctx.fillRect (this.x, this.y, 60, 60);

        ctx.beginPath();
     ctx.moveTo(this.x , this.y);
     ctx.lineTo(this.x + 60 , this.y);
     ctx.lineTo(this.x + 60, this.y + 60 );
     ctx.lineTo(this.x , this.y + 60);
     ctx.lineTo(this.x, this.y);
     ctx.stroke();
    },
    moverse:function(){
        if(this.y==0 && this.x<340){
            this.direccion = "derecha"
        }
        if(this.direccion == "derecha"){
            this.vX =50
            this.vY = 0
            this.y = 0
        }
        if( this.x>340 ){
            this.direccion = "abajo"
        }
        //f1
        if(this.x==340 && this.y<340){
            this.direccion = "abajo"
        }
        if(this.direccion == "abajo"){
            this.vX =0
            this.vY = 50
            this.x = 340
        }
        if( this.y>=340 && this.x > 60){
            this.y = this.y;
            this.direccion = "izquierda"
        }
        //f1
        //f2
        if(this.x <= 0 && this.y > 60){
            this.direccion = "arriba"
        }
        if(this.direccion == "arriba"){
            this.vX =0
            this.vY = -50
            this.x = 0
        }
        //f2
        if(this.direccion == "abajo"){
            this.vX =0
            this.vY = 50
            this.x = 340
        }
        if(this.y==340 && this.x>60){
            this.direccion = "izquierda"
        }
        if(this.direccion == "izquierda"){
            this.vX =-50
            this.vY = 0
            this.y = 340
        }
        if(this.y==400 && this.x==60){
            this.direccion = "arriba"
        }
        if(this.direccion == "arriba"){
            this.vX =0
            this.vY = -50
            this.x = 0
        }
        //final
        if(this.y<=0 && this.x<=0){
            this.direccion = "derecha"
        }
        if(this.direccion == "derecha"){
            this.vX =50
            this.vY = 0
            this.y = 0
        }
        if( this.x>340 ){
            this.direccion = "abajo"
        }
       
        //console.log(this.direccion, this.x, this.y, this.vX, this.vY)
        this.x = this.x + this.vX * dT/1000;
        this.y = this.y + this.vY * dT/1000;
        
       
    }
}
let zona2 = Object.create(zona1)
zona2.x= 340;
zona2.y=340;
zona2.direccion = "izquierda";

let zona3 = Object.create(zona1)
zona3.x= 0;
zona3.y=280;
zona3.direccion = "arriba";

let zona4 = Object.create(zona1)
zona4.x= 340;
zona4.y=0;
zona4.direccion = "abajo";
zonas.push(zona1)
zonas.push(zona2)
zonas.push(zona3)
zonas.push(zona4)
function mostrarPuntaje(){
    ctx.font = "30px Arial";
    ctx.fillStyle = "black"
    ctx.fillText(`Puntaje: ${score}`, 10, 50);
}
let balones = []
let Balon = {
    x:200,
    y:200,
    r:15,
    vX: 50,
    vY: -50,
    dibujarse:function(){
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 2*Math.PI, 0);
        ctx.fillStyle = "rgba(0,0,0,0.5)"
        ctx.stroke();
        ctx.fill();
    },
    moverse:function(){
        this.x = this.x + this.vX * dT/1000;
        this.y = this.y + this.vY * dT/1000;
    }

}

function mostrarTiempo() {
    ctx.font = "20px Arial";
    ctx.fillStyle = "black"
    ctx.fillText(`Tiempo: ${Math.round(t)}`, 10, 100);
}
function colisionConBalones(balones)
{

    let distancia = Math.sqrt(Math.pow(Balon.x - GAME.objects.player.x, 2) + Math.pow(Balon.y - GAME.objects.player.y, 2));
    if (distancia < Balon.r + GAME.objects.player.width/2) return true;
    else return  false;
}
function buscarColisiones()
{
    let colisiones = []
    for (let i=0; i < GAME.objects.balones.length; i++){
        if(colisionConNave(GAME.objects.balones[i])) colisiones.push(i);
    }
    return colisiones;
}
function algunaSeSalio(){
    for (let balon of GAME.objects.balones){
        // se salió?
        if(balon.x >= 400 + balon.r || balon.x <= -balon.r ||
            balon.y >= 400 + balon.r || balon.y <= -balon.r )
        {
            return true;
        }
    }
    return false;
}
function quitarBalones(colisiones) {
    for(let pos of colisiones){
        // splice quita elementos de un array.
        GAME.objects.balones.splice(pos, 1);
    }
}
function resetSpeed() {
    GAME.objects.player.speed = 15;
    GAME.objects.player.dibujarse();
    GAME.objects.player.moverse();
    let colisiones = buscarColisiones();
    quitarBalones(colisiones);
    GAME.score += colisiones.length;
}
function calcularPuntaje(){
 for(let i = 0; i<balones.length;i++){
     for(let zona of zonas){
         if(
             balones[i].x>zona.x && balones[i].x<zona.x +60 &&
             balones[i].y>zona.y && balones[i].y<zona.y +60)
             {
             score = score + 1;
             balones.splice(i, 1)
             }
     }
 }
 
}
drawObj.draw =  function(){
    t = t + dT/1000;
    ctx.clearRect(0, 0, 400, 400);
    for(let zona of zonas){
        zona.dibujarse();
        zona.moverse();
    }

    for (let balon of balones){
        balon.dibujarse()
        balon.moverse()
    }
    calcularPuntaje();
    mostrarPuntaje();
    mostrarTiempo();
    if ( t > 20 ){
        clearInterval(mainInterval)
        ctx.font = "50px Arial";
        ctx.fillStyle = "red";
        ctx.fillText(`PERDISTE`, 80, 180);
    }
    if (score <=30)
        pause();
        ctx.font = "50px Arial";
        ctx.fillStyle = "green";
        ctx.fillText(`GANASTE`, 80, 180);
    }


run()
function crearParticula(je){
    let nuevoBalon = Object.create(Balon)
    nuevoBalon.x = 200
    nuevoBalon.y = 200
    let ang = 2 * Math.PI * Math.random()
    let velocidad = 400
    let vX = 230
    nuevoBalon.vX = velocidad* Math.cos(ang)
    nuevoBalon.vY = velocidad * Math.sin(ang)
    balones.push(nuevoBalon)
    console.log(balones)
}
canvas.onclick = crearParticula


