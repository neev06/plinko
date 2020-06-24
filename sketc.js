// const Engine = Matter.Engine;
// const World= Matter.World;
// const Bodies = Matter.Bodies;


// var particles=[];
// var plinkos=[];
// var divisions=[];
// var divisionheight=300;


// function setup() {
//   createCanvas(480,800);
//  //createSprite(400, 200, 50, 50);
//   engine = Engine.create();
//   world = engine.world;
//   ground = new Ground(480/2,800,480,20);

//   for(var k=0;k <=400;k=k+80){
//     divisions.push(new Ground(k,800-divisionheight/2,10,divisionheight))
// }
// for (var j = 75; j <=480; j=j+50) 
//     {
    
//        plinkos.push(new Plinko(j,75));
//     }
//     for (var j = 50; j <=480-20; j=j+50) 
//     {
    
//        plinkos.push(new Plinko(j,175));
//     }
//     for (var j = 75; j <=480; j=j+50) 
//     {
    
//        plinkos.push(new Plinko(j,275));
//     }
//     for (var j = 50; j <=480-20; j=j+50) 
//     {
    
//        plinkos.push(new Plinko(j,375));
//     }
// }

// function draw() {
//   background(0); 
//   Engine.update(engine); 
//   ground.display();
//   for (var k = 0; k < divisions.length; k++) {
     
//     divisions[k].display();
//   }
//   for (var j = 0; j < plinkos.length; j++) {
     
//     plinkos[j].display();
    
//   }
//   drawSprites();
 
// }




