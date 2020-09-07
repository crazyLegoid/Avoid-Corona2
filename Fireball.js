class Fireball{

    constructor() {
        
        this.x = random(200, 720);
        this.y = 10;
        this.grav = 1;
        this.velY = 0;
        this.death = false;

    }

    display() {

        if (this.death === false) {
            fill(255);
            ellipse(this.x, this.y, 30);
        }
            
    }

    update() {

        this.velY += this.grav;
        this.y += this.velY;
        
        if (this.y > 335) {

            this.death = true;

            // if (mute === false) {
                
            //     crashS.play();

            // }
            // crashS.play();

        }
        //console.log(this);
        //i++;     

    }

}