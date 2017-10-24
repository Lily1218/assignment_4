function setup() {
  createCanvas(windowWidth,windowHeight);
  angleMode(DEGREES);
 
}

function draw() {
  translate(width/2,height/2);
  rotate(-90);
  background('#ffffff');
  
  if (hour() > 12){
    var nhour = hour() - 12;
  } else {
    var nhour = hour();
  }
  hpara = nhour * 30;
  mpara = minute()*6;
  spara = second()*6
  
  var diameter = 0;
  if(width > height){
    diameter = height;
    } else {
      diameter = width;
    }
    
    noStroke();
    fill('#353535');
    ellipse(0,0,diameter*0.9,diameter*0.9);
    
  //console.log(hpara);
  clockHand(hpara,diameter*0.3,diameter/15,'#a72a2a');
  clockHand(mpara,diameter*0.5,diameter/30,'#a72a2a');
  clockHand(spara,diameter*0.7,diameter/45,'#a72a2a');
  //noFill();
  //ellipse(0,0,400,400);
}

function clockHand(para,size,weight,color){
  noFill();
  strokeWeight(weight);
  stroke(167,42,42,200);
  arc(0,0,size,size,0,para);
  
  stroke(167,42,42,30);
  ellipse(0,0,size,size);
  }
  
function windowResized(){
  resizeCanvas(windowWidth,windowHeight);
}