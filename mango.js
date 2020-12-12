class Mango{
  constructor(x,y,radius){
      var option={
          restitution:0,
          friction:1,
          isStatic:true
      }
      this.x=x;
      this.y=y;
      this.r=radius
      this.Image=loadImage("mango.png");
      this.body=Bodies.circle(x,y,radius,option);
      World.add(world,this.body);
  }
   display(){
     var pos=this.body.position;
     push();
     translate(pos.x,pos.y);
     imageMode(CENTER);
     image(this.Image,0,0,this.r,this.r);
    pop();
   } 

}