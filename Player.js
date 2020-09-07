class Player {

    constructor(x, y, radius) {

        this.x = x;
        this.y = y;
        this.r = radius;
        this.grav = 0.6;
        this.velY = 0;
        this.upForce = -20;
        this.image = loadImage("images/player.png");

    }

    move() {

        if (keyIsDown(65) || keyIsDown(LEFT_ARROW)) {

            this.x -= 5;
            //this.image = loadImage("images/knight-Left.png")
            this.image = loadImage("images/Segwaysteve.png");


            if(levelD === 1){

                this.image = loadImage("images/Segwaysreve(levelD(left)).png")

            }

            dir = "left";
            // walkS.play();
            // walkS.rate(1);

        }

        if (keyIsDown(68) || keyIsDown(RIGHT_ARROW)) {

            this.x += 7;
            //this.image = loadImage("images/knight -Right.png");
            this.image = loadImage("images/Segwaysteve.png");

            if(levelD === 1){

                this.image = loadImage("images/Segwaysreve(levelD(left)).png")

            }

            dir = "right";
            // walkS.play();
            // walkS.rate(1);


        }

    }

    //display && update
    display() {

        // fill("#c2b280");
        // stroke("#c2b280");
        // ellipse(this.x, this.y, 18, 18);
        imageMode(CENTER);
        image(this.image, this.x, this.y, 30, 90);

    }

    update() {

        this.velY += this.grav;
        this.y += this.velY;

    }

    groundC() {
        
        if (this.y > 350) {
            this.y = 350;
            this.velY = 0;
            jumpCase = 0;

        }

    }

    //Movement
    up() {
        //console.log("Up");
        this.velY += this.upForce;
        jumpS.play();
        //console.log(this.velY);
    }

    foward() {

        if (keyIsDown(UP_ARROW) || keyIsDown(87)) {

            this.y -= 5;

        }

        if (keyIsDown(DOWN_ARROW) || keyIsDown(83)) {

            this.y += 5;
            // console.log("Hit");

        }

    }



    //Level Increments
    check(body) {

        if (this.x > 800) {

            if(introS === 2){

                stage++;
                this.x = 20;

            } else if (stage === 5) {
                
                this.x = 800;

            }

        }

        if (this.x < 0) {

            if (introS === 2) {
                
                this.x = 0;

            }

            if (introS === 0) {
      
                stage--;
                this.x = 780;
    
                if (levelD === 1) {
                    
                    body.x = 1500;
    
                }

            }

        }

    }


}