class Tile {

    constructor(x, y, width, height) {

        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height
        this.tileColor = 255;
        this.image = loadImage("images/snake.png");

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
            // console.log("Yes");

            if (levelD === 0) {
                
                body.x = 30;
                body.y = 380;
                imageMode(CENTER);
                image(this.image, this.x, this.y, 112, 118);

            } else {
                
                body.x = 770;
                body.y = 380;
                rock.x = 1500;
                imageMode(CENTER);
                image(this.image, this.x, this.y, 112, 118);

            }
            
            if (mute === false) {
                
                deathS.play()

            }

            deathCounter++;
            return true;
        }

    }

}