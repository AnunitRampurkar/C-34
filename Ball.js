class Ball{
    constructor(x, y, width, height) {
        var option = {
            density: 1,
            frictionAir: 0.005
        }

        this.body = Bodies.rectangle(x, y, width, height, option);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
    }

    display() {
        fill("turquoise");
        ellipseMode(RADIUS);
        var pos = this.body.position;
        ellipse(pos.x, pos.y, this.width, this.height);
    }
}