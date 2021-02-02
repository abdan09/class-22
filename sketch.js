const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies

var engine,world,box,ground

function setup(){
  var canvas=createCanvas(400,400);
  engine=Engine.create();
  world=engine.world;

  var ground_option={
    isStatic:true
  }

  ground=Bodies.rectangle(200,390,400,20,ground_option)
  World.add(world,ground);

  console.log(ground);

  var box_option={
    restitution:1
  }


  box=Bodies.rectangle(100,100,50,50,box_option)
  World.add(world,box);
  

}
function draw()
{

  background(0);
  Engine.update(engine)
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,400,50);

    rectMode(CENTER);
    rect(box.position.x,box.position.y,50,50);
  
}
