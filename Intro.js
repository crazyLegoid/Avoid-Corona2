class Intro{

    constructor(x, y) {
        
        this.x = x;
        this.y = y;
        this.image = loadImage("images/IntroB.png");

    }

    display() {
        
        imageMode(CENTER)
        image(this.image, this.x, this.y, 800, 400);

    }

}