class MagicDoor{

    constructor(x, y) {
        
        this.x = x;
        this.y = y;
        this.width = 10;
        this.height = 10;
        this.image = loadImage("images/door1.png");

    }

    display() {
        
        fill("brown");
        rect(this.x, this.y, this.width, this.height);
        imageMode(CENTER);
        image(this.image, this.x, this.y, 100, 100);

    }

}