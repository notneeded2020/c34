class Rope{

constructor (bodyA,pointB){

   var options = {
    bodyA:bodyA,
    pointB:pointB,
    stiffness: 1.2,
    length: 200
   }
this.pointB = pointB;
this.rope = Constraint.create (options);
World.add (world,this.rope);

}

display(){
    var point1 = this.rope.bodyA.position;
    var point2 = this.pointB;

    stroke ("grey");
    strokeWeight (5);
    line (point1.x,point1.y,point2.x,point2.y);
}




}