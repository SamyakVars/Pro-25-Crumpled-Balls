var body1, body2, body3;


class Dustbin{

    constructor(){

    //var body1, body2, body3

    body1 = Bodies.rectangle(827.5, 542.5, 15, 100, {isStatic: true})
	body2 = Bodies.rectangle(902.5, 622.5, 150, 15, {isStatic: true})
	body3 = Bodies.rectangle(975, 542.5, 15, 100, {isStatic: true})

	World.add(world, body1)
	World.add(world, body2)
    World.add(world, body3)

    this.image = loadImage("dustbin.png")
    

    }

    show(){
        var pos1 = body1.position
        var pos2 = body2.position
        var pos3 = body3.position

        image(this.image, pos2.x - 80, 555 - 105, 160, 180)
    }



}