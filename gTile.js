class gTile {

    constructor(x, y, width, height) {

        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height
        this.tileColor = 255;

    }


    //display
    display() {

        rectMode(CENTER)
        fill(this.tileColor);
        rect(this.x, this.y, this.width, this.height);

    }

    isTouching(body) {

        if (body.x > this.x - this.width
            && body.x < this.x + this.width
            && body.y > this.y - this.height
            && body.y < this.y + this.height) {
            
            //goodS.play();
            // console.log("Yes");
            return true;
        }

    }

}