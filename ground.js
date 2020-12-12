class Ground{
    constructor(x,y,width,height){
        var option={
            isStatic:true
        }
        this.x=x;
      this.y=y;
      this.width=width;
      this.height=height;
      this.body=Bodies.rectangle(x,y,width,height,option);
      World.add(world,this.body);
  }
   display(){
     rectMode(CENTER);
     fill ("yellow");
     rect(this.body.position.x,this.body.position.y,this.width,this.height);
   } 

}