class Paper{

    constructor(x,y,radius){

        var options={

            isStatic:false,
            density: 1.2,
            friction:0.5,
            restitution:0.3

        }

        this.body=Bodies.circle(x,y,radius,options);
        World.add(world,this.body);

        
    }

    display(){

    ellipseMode(RADIUS)
    ellipse(this.body.position.x,this.body.position.y,20,20);
    push();
}

}