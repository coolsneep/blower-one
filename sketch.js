const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;
let engine;
let world;
var ball,ground,blowerPipe
function preload(){


}
function setup() {
  rectMode(CENTER)
  createCanvas(800,800);
  
  engine = Engine.create();
  world = engine.world;
  
  blower = createImg('blower.png');
  blower.position(200,500);
  blower.size(150,150);
  blower.mouseClicked(airBlow);
  

  ball = Bodies.circle(200,350,20);
  World.add(world,ball)

  blowerPipe = Bodies.rectangle(200,400,40,40, {
    isStatic:true
   })

  World.add(world,blowerPipe)


}

function draw() {
  background("red"); 
  Engine.update(engine);
  
  rect(blowerPipe.position.x,blowerPipe.position.y,40,40)
  ellipse(ball.position.x,ball.position.y,20)
  
 
  drawSprites();
}
function airBlow()
{
  Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.1}) 

}