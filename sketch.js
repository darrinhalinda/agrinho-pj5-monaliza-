function setup() {
  createCanvas(400, 400);
}
let olhoX;
let olhoY;
function draw() {
  background('#9E9E9E2F');
  fill('#5454AD1B')  // cor do rosto 
    circle  (200,200,300);   //rosto
  fill('green')  // cor do olho 
circle (250,150,66);   //olho direito 
line(300,270,170,300)   //boca
  fill('#795548')  // cor do nariz e da pupila
  triangle(200,10,160,220,2,20);
triangle(200,10,160,220,2,200);  
  line (225,116,279,106)   //sobrancelha direita
      
  //circle 0,150,30)  //pupila direita 
  //circle(mouseX,mouseY,10)
  
  olhoX=map(mouseX,0,400,130,150);
  olhoY=map(mouseY,0,400,130,150);
  
  
  circle(olhoX+100,olhoY,10);
  
if(mouseIsPressed){
   console.log(mouseX,mouseY)
  
   }
}