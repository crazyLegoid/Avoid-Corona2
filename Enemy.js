class Enemy {

    constructor(id, y) {
        this.id = id;
        this.x = random(300, 800);
        this.y = y;
        this.velX = random(2, 5);
        this.health = 3;
        this.width = 50;
        this.height = 50;
        this.enemyT = 0;
        this.image = loadImage("images/images.png")
        //this.image = createImage("images/AW685789_00.gif");
        //this.image = loadImage("images/skele.gif")

    }

    //display
    display() {

        if (this.health > 0) {

            // fill("red");
            // ellipse(this.x, this.y, 10, 10);
            this.enemyT = 0;
            imageMode(CENTER);
            image(this.image, this.x, this.y, 90, 100);
            //this.image.position(this.x, this.y);

        } else {

            this.y = 0;

        }
    }

    move(body) {

        var diffX = body.x - this.x;

        if (diffX > 0) {

            this.x += 5;

        } else if (diffX < 0) {

            this.x -= 5;

        }

    }


    isTouching(body) {

        if (body.x > this.x - this.width
            && body.x < this.x + this.width
            && body.y > this.y - this.height
            && body.y < this.y + this.height) {

            if (levelD === 0) {

                body.x = 20;

                if (mute === false) {

                    deathS.play();
            
                }

            } else {

                body.x = 380;

                if (mute === false) {

                    deathS.play();
            
                }

            }

            this.enemyT = 1
            this.velX = random(1, 5);
            this.x = random(300, 800);
            deathCounter++;
            //console.log("yolo")
        }

    }

    check() {

        if (this.x < 0) {

            this.x = 700;

        }

    }

}