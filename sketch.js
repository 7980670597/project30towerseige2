const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var platform;


function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    platform = new Ground(800, 205, 300, 10);


    box1 = new Box(850,180,30,40);
    box2 = new Box(900,180,30,40);
    box3 = new Box(800,180,30,40);
    box4 = new Box(750,180,30,40);
    box5 = new Box(700,180,30,40);
    box6 = new Box(825,90,30,40)
    box7 = new Box(875,90,30,40);
    box8 = new Box(775,90,30,40);
    box9 = new Box(725,90,30,40);
    box10 = new Box(850,45,30,40);
    box11 = new Box(800,45,30,40); 
    box12 = new Box(750,45,30,40);
    

   
    //log6 = new Log(230,180,80,PI/2);
    bird = new Bird(100,100);
    slingshot = new SlingShot(bird.body,{x:200,y:100});
}

function draw(){
    background(0);
    Engine.update(engine);
  
    ground.display();
    
    

    
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
   

    bird.display();
    platform.display();
    //log6.display();
    slingshot.display();
}
function mouseDragged(){
    Matter.Body.setPosition(bird.body,{x:mouseX, y: mouseY});
}
function mouseReleased(){
    slingshot.fly();
}