class Chain{
constructor(bodyA,bodyB){
    var options = { 
        bodyA: bird.body,
        bodyB: constrainedlog.body,
        length:10,
        stiffness:0.04
    }
    this.chain=Constraint.create(options) 
    World.add(world,this.chain)
}
display(){
    var pointA=this.chain.bodyA.position
    var pointB=this.chain.bodyB.position
    strokeWeight(4);
    line(bird.body.position.x,bird.body.position.y,constrainedlog.body.position.x,constrainedlog.body.position.y);
}
}