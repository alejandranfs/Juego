import {IMAGES as images} from './initialize.js'
import {ctx, canvas, drawObj, run, start, dT} from './initialize.js'

let zona1 = {
    x:0,
    y:0,
    vX: 50,
    vY: 0,
    direccion: "derecha",
    direccion: "abajo",
    direccion: "izquierda",
    direccion: "arriba",

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
let zona2 = {
    x2:340,
    y2:340,
    vX2: 50,
    vY2: 0,
    direccion: "abajo",
    direccion: "izquierda",
    direccion: "arriba",
    direccion: "derecha",
    
    dibujarse:function(){
        ctx.fillStyle = "orange";
        ctx.fillRect (this.x2, this.y2, 60, 60);

        ctx.beginPath();
     ctx.moveTo(this.x2 , this.y2);
     ctx.lineTo(this.x2 + 60 , this.y2);
     ctx.lineTo(this.x2 + 60, this.y2 + 60 );
     ctx.lineTo(this.x2 , this.y2 + 60);
     ctx.lineTo(this.x2, this.y2);
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


        this.x2 = this.x2  - this.vX2 * dT/1000;
        this.y2 = this.y2 + this.vY2 * dT/1000;
    }
}
let zona3 = {
    x3:0,
    y3:280,
    vX3: 0,
    vY3: 50,
    direccion: "izquierda",
    direccion: "abajo",
    direccion: "arriba",
    direccion: "derecha",

    dibujarse:function(){
        ctx.fillStyle = "orange";
        ctx.fillRect (this.x3, this.y3, 60, 60);

        ctx.beginPath();
     ctx.moveTo(this.x3 , this.y3);
     ctx.lineTo(this.x3 + 60 , this.y3);
     ctx.lineTo(this.x3 + 60, this.y3 + 60 );
     ctx.lineTo(this.x3 , this.y3 + 60);
     ctx.lineTo(this.x3, this.y3);
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
        this.x3 = this.x3 + this.vX3 * dT/1000;
        this.y3 = this.y3 - this.vY3 * dT/1000;
    }
}
let zona4 = {
    x4:340,
    y4:0,
    vX4: 0,
    vY4: 50,
    direccion: "arriba",
    direccion: "derecha",
    direccion: "abajo",
    direccion: "izquierda",

    dibujarse:function(){
        ctx.fillStyle = "orange";
        ctx.fillRect (this.x4, this.y4, 60, 60);

        ctx.beginPath();
     ctx.moveTo(this.x4 , this.y4);
     ctx.lineTo(this.x4 + 60 , this.y4);
     ctx.lineTo(this.x4 + 60, this.y4 + 60 );
     ctx.lineTo(this.x4 , this.y4 + 60);
     ctx.lineTo(this.x4, this.y4);
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
        this.x4 = this.x4 + this.vX4 * dT/1000;
        this.y4 = this.y4 + this.vY4 * dT/1000;
    }
}
//balones
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

    

drawObj.draw =  function(){
    ctx.clearRect(0, 0, 400, 400);
    zona1.dibujarse();
    zona1.moverse();
    zona2.dibujarse();
    zona2.moverse();
    zona3.dibujarse();
    zona3.moverse();
    zona4.dibujarse();
    zona4.moverse();
    for (let balon of balones){
        // console.log(particula)
        balon.dibujarse()
        balon.moverse()
    }
  
}

run()
function crearParticula(je){
    let nuevoBalon = Object.create(Balon)
    nuevoBalon.x = 200
    nuevoBalon.y = 200
    let ang = 2 * Math.PI * Math.random()
    let velocidad = Math.random() * 400
    let vX = 230* Math.random()
    nuevoBalon.vX = velocidad* Math.cos(ang)
    nuevoBalon.vY = velocidad * Math.sin(ang)
    balones.push(nuevoBalon)
    console.log(balones)
}
canvas.onclick = crearParticula


