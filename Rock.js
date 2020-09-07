class Rock{

    constructor(x, y, r) {
        
        this.x = x;
        this.y = y;
        this.r = r;
        this.xspeed = -5;
        this.health = 0;
        this.image = loadImage('images/Corona.png');
        this.angle = 0;

    }

    display() {
        
        angleMode(DEGREES);

        push();
        //rotate(10);
        imageMode(CENTER);
        translate(this.x, this.y)
        rotate(this.angle);
        // fill("#8d8e74");
        // ellipse(0, 0, this.r);
        image(this.image, 0, 0, this.r, this.r);
        this.angle -= 5
        pop();

    }

    update() {
        
        if (this.health === 1) {
         
            this.x += this.xspeed;

        }

    }

    isTouching(body) {
        
        if (body.x > this.x - this.r/2
            && body.x < this.x + this.r/2
            && body.y > this.y - this.r/2
            && body.y < this.y + this.r/2) {
            
            body.x = 780;
            this.x = 1500;

            if (mute === false) {

                deathS.play();
        
            }

            deathCounter++;

        }

    }

}