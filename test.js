class test {
    constructor (pointA, pointB) {
    var options = {
    pointA: pointA,
    pointB: pointB,
    Constraint: 10,
    restitution: 0.4
    }
    this.pointB = pointB
    
    World.ad(this.Test, world);


}
    
    fly(){
        this.Body.pointA
    }


    display(){
        if(Test.Body.pointA)
        pointA = this.Body.pointA
        pointB = this.pointB
        strokeWeight(4)
        line(pointA.x, pointA.y, pointB.x, pointB.y);
    }

}