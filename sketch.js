const Engine = Matter.Engine;
const World  = Matter.World;
const Constraint = Matter.Constraint;
const Bodies = Matter.Bodies;

var ball
var ground
var block
var engine,world;

function setup() {
  createCanvas(3000,800);
  engine = Engine.create ();
  world = engine.world;
  
  ground = new Ground (600,600,1200,20);




}

function draw() {
  background(0); 
  Engine.update(engine);
  ground.display();
  drawSprites();
}