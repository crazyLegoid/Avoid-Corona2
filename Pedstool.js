class Diamond{

    constructor(x, width, height) {
        
        this.x = x;
        this.y = 300;
        this.width = width;
        this.height = height;
        this.health = 0;
        this.image = loadImage("images/basketcase.png")
        winS = loadSound("sound/win.wav")

    }

    display() {
        
        //rectMode(CENTER);
        if (this.health === 0) {
            
            imageMode(CENTER);
            // fill(255);
            // rect(this.x, this.y, this.width, this.height);
            image(this.image, this.x, this.y, 40, 30);

        }
        
    }

    isTouching(body, body2) {
        
        if (body.x > this.x - this.width
            && body.x < this.x + this.width
            && body.y > this.y - this.height
            && body.y < this.y + this.height && this.health === 0) {
         
            this.health = 1;
            body2.health = 1;
            levelD = 1;
            introS = 0;


            if (mute === false) {

                winS.play();
        
            }
            
        }

    }

}