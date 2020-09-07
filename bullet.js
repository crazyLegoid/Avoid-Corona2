class Bullet {

    constructor(x, y) {

        this.x = x;
        this.y = y;
        this.width = 20;
        this.height = 5;
        this.velX = 10;
        this.health = 1;
        this.image = loadImage("images/bullet1.png");

    }

    display() {

        if(this.health > 0){

            imageMode(CENTER);
            // fill(255);
            // rect(this.x, this.y, this.width, this.height);
            this.enemyT = 0;
            image(this.image, this.x, this.y - 10, this.width, this.height);

        }  

    }

    update() {

        if (dir === "right") {
            
            this.x += this.velX;

        }

        if(dir === "left") {
    
            this.x -= this.velX;

        }

        
        // if (this.offset()) {
        //     this.width = 0
        //     this.height = 0;
        // }
    }

    offset() {

        if (this.x < 0 || this.x > 800) {

            this.health--;

        }


    }

    isTouching(body) {

        if (body.x > this.x - this.width
            && body.x < this.x + this.width
            && body.y > this.y - this.height
            && body.y < this.y + this.height && this.health > 0) {

                 
            body.health -= 1;
            //console.log("hi");
            //console.log(body);
            //body.enemyT = 1;

            this.health = 0;

            //USE ONLY WHILE TESTING && this.health === 1

            return true;

        }else if (body.x > this.x - this.width
            && body.x < this.x + this.width
            && body.y > this.y - this.height
            && body.y < this.y + this.height && this.health === 1 && body.health < 0) {

                
            //body.health -= 1;
            //console.log("else hi");
            //body.enemyT = 1;

            this.health = 1;

            //USE ONLY WHILE TESTING && this.health === 1

            return true;
        }

    }

}