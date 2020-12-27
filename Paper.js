
class Paper {

    constructor(x, r){

        var options = {
            restitution: 0.3,
            density: 1.2,
            friction: 0.5
        }



        this.r = r

        this.body = Bodies.circle(x, 450, this.r, options)
        this.image = loadImage("paper.png")

        World.add(world, this.body)
    }

    show(){

        var pos = this.body.position

        push()

        fill(255)
        translate(pos.x, pos.y)
        
        imageMode(CENTER);
        image(this.image, 0, 0, this.r * 2.85, this.r * 2.85);
        pop()
    }
}