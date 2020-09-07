class Ground{

    constructor(x, y, width, height){

        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.image = loadImage("images/ground.png");

    }

    display(){

        imageMode(CENTER);
        // rectMode(CENTER);
        // fill("#b3955d");
        // stroke("#b3955d")
        // rect(this.x, this.y, this.width, this.height);
        image(this.image, this.x, this.y + 20, this.width, this.height + 60);

    }

    isTouching(body){

        if(body.y - this.y < body.r + this.height/2){ //&& this.x - body.x < this.width/2 + body.r){

            body.y = body.r + this.height/2;
            body.velY = 0;

        }

    }

}