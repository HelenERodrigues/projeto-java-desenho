//aula 01-java. helen
/*
function == função
setup    == configuração
*/

let rx = 200;
let ry = 200;
let rc = 100;
let ra = 50;

let px = 300;
let py = 10;
let d  = 20;


function setup() {

// create == criar
// canvas == tela
// 600    == tamanho do pixel
 
   
  createCanvas(600, 600);
   
  // back   == atrás
  // ground == chão
   
// background("#6C6F9B");
// background("rgb(166, 49, 70)");
//            RED, GRE, BLU
  background(100, 50, 300);
}

// draw == desenhe
function draw() {
     //posição - tamanho
     //(x,y)   - (comp,alt)
  //rect(rx, ry, rc, ra);
  //circle(100,70,50)
  
  // strok#6c6f9baço
  stroke("#CFCDCD")
  // fill  == preencher
  fill("#DFF9FA")
         
  // rect  == preencher
  if (mouseIsPressed){
    circle(mouseX,mouseY,d);    
  }
}