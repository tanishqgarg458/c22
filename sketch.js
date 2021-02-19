//TANISHQ
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
//YOUR PROGRAMS VARS
var engine, world;
var object;
var ground;
function setup(){
    createCanvas(400,400);//DEFAULT
    engine = Engine.create();//engine = Matter.Engine.create(); DEFAULT
    world = engine.world;//DEFAULT
    //CREATING YOUR BODIES
    var options ={
        isStatic: true 
    }
    var o_options={
        restitution:1
    }
   object= Bodies.rectangle(20,30,200,20, o_options);
    World.add(world,object);
    ground = Bodies.rectangle(200,300,400,20, options);
    World.add(world,ground);
   


    console.log(object);
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    rect(object.position.x,object.position.y,50,50);
    rect(ground.position.x,ground.position.y,400,20);
}
