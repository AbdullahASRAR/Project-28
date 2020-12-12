class   Sling{
    constructor(body1,point2){
        var option={
         bodyA:body1,
         pointB:point2,
         stiffness:0.004,
         length:5
        }
        this.sling =Constraint.create(option)
         World.add(world,this.sling)
         this.pointB=point2
    }

      display(){
       if(this.sling.bodyA){ 
        var pointA=this.sling.bodyA.position;
        var pointB=this.pointB;
        strokeWeight(4);
        line (pointA.x,pointA.y,pointB.x,pointB.y)
       }
      }
      fly(){
       this.sling.bodyA=null;
      }
      attach(bodyA){
        this.sling.bodyA=bodyA
      }
}
