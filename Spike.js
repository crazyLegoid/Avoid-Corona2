class Spike{

    constructor(x, y, width, height) {
        
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.image = loadImage("images/Spike.png")

    }

    display() {
        
        fill("#c2b280");
        stroke("#c2b280")
        // rectMode(CENTER);
        // rect(this.x, this.y, this.width, this.height);
        imageMode(CENTER);
        image(this.image, this.x, this.y, 50, 60);

    }

    isTouching(body) {
        
        if (body.x > (this.x - this.width)
            && body.x < (this.x + this.width)
            && body.y > (this.y - this.height)
            && body.y < (this.y + this.height)) {
            
            if (levelD === 0) {
                
                body.x = 20;
                //console.log("try")

                if (mute === false) {

                    deathS.play();
            
                }

            } else {
                
                body.x = 780;
                rock.x = 1500;

            }
            
            deathCounter++;

        }

    }

}