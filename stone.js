class Stone{
    constructor(x,y,radius){
        var option={
        restitution:0,
        friction:1,
        density:1.2,
        isStatic:false
    }
    this.x=x;
    this.y=y;
    this.r=radius
    this.Image=loadImage("stone.png");
    this.body=Bodies.circle(x,y,radius,option);
    World.add(world,this.body);
}
 display(){
   var pos=this.body.position;
   var angle=this.body.angle;
   push();
   translate(pos.x,pos.y);
   rotate(angle);
   imageMode(CENTER);
   image(this.Image,0,0,this.r,this.r);
   pop();
 } 

}