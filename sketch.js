//LOTS OF VARIABLES
var player, ground, door;
var jumpCase = 0;
var stage = 0;
var myTileArray = [];
var deathS, crashS, goodS, shootS, jumpS, walkS, winS;
var i = 1;
var block, block2, block3, block4;
var bullets = [];
var enemy1, enemy2, enemy3, enemy4, enemy5, enemy6;
var enemyT = "empty";
var spike1, spike2;
var fireballs = [];
var diamond;
var rock;
var levelD = 0;
var intro;
var dir = "right";
var introS = 1;
var foo, incoming;
var deathCounter = 0;
var font;
var player_run;

var video;
var button, resetButton;
var snapshot = [];

var mute = false;
//var speechRec;

//Preload all sounds and Images

function preload() {

    deathS = loadSound("sound/death.wav");
    crashS = loadSound("sound/crash.wav");
    goodS = loadSound("sound/good.wav");
    jumpS = loadSound("sound/jump.wav");
    shootS = loadSound("sound/shoot.wav");
    //wall = loadImage("images/background_stage21.PNG");
    wall = loadImage("images/Bg1.png");
    Bg2 = loadImage("images/Bg2.png");
    Bg3 = loadImage("images/Bg3.png");
    Bg4 = loadImage("images/Bg4.png");
    Loading = loadImage("images/Loading.jpg");

    Arya = loadImage("images/Skull.png");

    winI = loadImage("images/pyramid1.jpg");


    font = loadFont('Assets/Brigitte_Eigner.ttf');

}


//setup
function setup() {
    let myCanvas = createCanvas(800, 400);
    myCanvas.class("mycanvas");

    myCanvas.mousePressed(onCanvasPressed);

    //setting all variables to the classes

    player = new Player(20, 380);
    ground = new Ground(400, 390, 800, 20);
    block = new Block(200, 50, 50, 100, 0.6);
    block2 = new Block(350, 50, 50, 100, 1);
    block3 = new Block(500, 50, 50, 100, 1.5)
    block4 = new Block(650, 50, 50, 100, 2);
    door = new MagicDoor(765, 345);
    enemy1 = new Enemy(1, 350);
    enemy2 = new Enemy(2, 350)
    enemy3 = new Enemy(3, 350)
    enemy4 = new Enemy(4, 350)
    enemy5 = new Enemy(5, 350)
    enemy6 = new Enemy(6, 350)
    spike1 = new Spike(190, 360, 30, 40);
    spike2 = new Spike(340, 360, 30, 40);
    spike3 = new Spike(590, 360, 30, 40);
    diamond = new Diamond(400, 40, 40);
    rock = new Rock(1500, 200, 350);
    intro = new Intro(400, 200);

    //creating video

    video = createCapture(VIDEO);
    video.size(100, 100);
    video.position(475, 25)
    button = createButton('Press To Become the Player!! Wait For Video To Load!');
    button.mousePressed(takesnap);
    button.position(425, 120);

    // let lang = navigator.language || 'en-US';
    // speechRec = new p5.SpeechRec(lang, gotSpeech)

    drawTiles();

}

//take photo

function takesnap() {
    snapshot = video.get();
    print(snapshot);
}



//draw
function draw() {

    //Intro
    if (stage === 0) {


        intro.display();

        //display the photo in a different position

        if (snapshot.width > 0 && levelD === 0) { //snapshot seen as object instead of array, so use object charatersitic to check
            //print(snapshot.length);
            imageMode(CENTER);
            image(snapshot, 650, 75, 100, 80);

        }
        level0();

    }

    //stage 1
    if (stage === 4) {

        background(Bg4);
        level1();

        //display the elements
        door.display();
        player.display();
        player.move();
        player.check(rock);

        if (snapshot.width > 0) { //snapshot seen as object instead of array, so use object charatersitic to check
            //print(snapshot.length);
            imageMode(CENTER);
            image(snapshot, player.x, player.y - 40, 30, 30);
        }

    }

    if (stage === 3) {

        background(Bg3);

        level2();
        //display the elements

        door.display();
        player.display();
        player.move();
        player.check(rock);

        //change image position

        if (snapshot.width > 0) {

            imageMode(CENTER);
            image(snapshot, player.x, player.y - 40, 30, 30);

        }

        //deathCounter

        push();
        textFont(font);
        fill("red");
        textSize(80);
        text("You died : " + deathCounter + " times", 400, 80);
        pop();
    }

    //stage 2

    if (stage === 2) {

        background(Bg2);
        level3();

        //display the elements

        door.display();
        player.display();
        player.move();
        player.check(rock);

        //change image position

        if (snapshot.width > 0) {
            imageMode(CENTER);
            image(snapshot, player.x, player.y - 40, 30, 30);

        }

        //deathCounter

        push();
        textFont(font);
        fill("red");
        textSize(80);
        text("You died : " + deathCounter + " times", 400, 80);
        pop();

    }

    if (stage === 1) {

      background(wall);


        level4();

        //display the elements

        door.display();
        player.display();
        player.move();
        player.check(rock);

        //change image position

        if (snapshot.width > 0) {
            imageMode(CENTER);
            image(snapshot, player.x, player.y - 40, 30, 30);

        }

        push();
        textFont(font);
        fill("red");
        textSize(80);
        text("You died : " + deathCounter + " times", 400, 80);
        pop();

    }

    if (stage === 5) {

        background(Arya);
        level5();

        //display the elements

        player.display();
        player.move();
        player.check(rock);

        //change image position

        if (snapshot.width > 0) {
            imageMode(CENTER);
            image(snapshot, player.x, player.y - 40, 30, 30);

        }

        push();
        textFont(font);
        fill("red");
        textSize(80);
        text("You died : " + deathCounter + " times", 400, 80);
        pop();

    }

    if (stage > 0) {

        button.hide();
        video.position(670, 100);

    }

    if (stage != 4) {

        if (stage != 0) {

            push()
            textSize(15);
            fill("black");
            text("Arrow Keys To Move", 10, 40);
            text("SPACEBAR for Jump", 10, 60);

            if (stage === 2) {

                text("'q' for Bullets", 10, 80);

            }
            pop()

        }


    }

}

//Jump function
function keyPressed() {

    if (stage != 4) {

        if (key === " ") {

            if (jumpCase === 0) {

                player.up();
                jumpCase = 1;


            }

        }
        player.velY += 1

    }

    if (stage === 2) {

        if (keyIsDown(81)) {

            bullets.push(new Bullet(player.x + 20, player.y));

            if (mute === false) {

                shootS.play();

            }

        }

        // if (keyIsDown(188)) {

        //   bullets[i].velX = -10;

        // }

    }

    if (stage === 0) {

        if (keyIsDown(73)) {

            intro.image = loadImage("images/IntroI.png");

        }

        if (keyIsDown(80)) {

            stage++;
            introS = 2;

        }

        if (keyIsDown(83)) {

            intro.image = loadImage("images/IntroI.png");
            storyVoice();
            video.position(600, 50);
            button.hide();


        }

    }

}

//stage5
function level5() {

    ground.display();
    player.grav = 0.6;
    player.update();
    player.upForce = -10;
    player.groundC();
    diamond.display();
    diamond.isTouching(player, rock);
    rock.display();
    rock.update();
    rock.isTouching(player);

}

//stage4
function level4() {

    ground.display();
    player.grav = 0.6;
    player.update();
    player.upForce = -10;
    player.groundC();

    spike1.display();
    spike1.isTouching(player);

    spike2.display();
    spike2.isTouching(player);

    spike3.display();
    spike3.isTouching(player);

    if (levelD === 1) {

        rock.display();
        rock.update();
        rock.isTouching(player);

    }

}

//stage3
function level3() {

    ground.display();
    player.grav = 0.6;
    player.update();
    player.upForce = -10;
    player.display();

    if (levelD === 0) {

        enemy1.display();
        enemy1.move(player);

        enemy2.display();
        enemy2.move(player);

        enemy3.display();
        enemy3.move(player);

        enemy4.display();
        enemy4.move(player);

        enemy5.display();
        enemy5.move(player);

        enemy6.display();
        enemy6.move(player);

        if (enemy1.enemyT === 0) {

            enemy1.isTouching(player);

        }

        if (enemy2.enemyT === 0) {

            enemy2.isTouching(player);

        }

        if (enemy3.enemyT === 0) {

            enemy3.isTouching(player);

        }

        if (enemy4.enemyT === 0) {

            enemy4.isTouching(player);

        }

        if (enemy5.enemyT === 0) {

            enemy5.isTouching(player);

        }

        if (enemy6.enemyT === 0) {

            enemy6.isTouching(player);

        }

    }


    player.groundC();




    for (var i = bullets.length - 1; i >= 0; i--) {

        bullets[i].display();
        bullets[i].update();
        bullets[i].offset();
        bullets[i].isTouching(enemy1);
        bullets[i].isTouching(enemy2);
        bullets[i].isTouching(enemy3);
        bullets[i].isTouching(enemy4);
        bullets[i].isTouching(enemy5);
        bullets[i].isTouching(enemy6);

    }

    if (levelD === 1) {

        rock.display();
        rock.update();
        rock.isTouching(player);

    }

}

//stage2
function level2() {
    ground.display();
    player.grav = 0.6;
    player.update();
    player.upForce = -10;
    player.display();
    player.groundC();



    block.update();
    block.display();
    block.isTouching(player);

    block2.update();
    block2.display();
    block2.isTouching(player);

    block3.update();
    block3.display();
    block3.isTouching(player);

    block4.update();
    block4.display();
    block4.isTouching(player);

    if (levelD === 1) {

        rock.display();
        rock.update();
        rock.isTouching(player);

    }

}

//stage detection
function level1() {

    textSize(25);
    stroke("red");
    textFont('Georgia');
    text("Find your path", 600, 70);
    //??level1??
    player.foward();
    player.groundC();

    player.grav = 0;

    stroke(255)
    for (var i = 0; i < myTileArray.length; i++) {

        var tile = myTileArray[i];
        tile.display();

    }


    for (var i = 0; i < myTileArray.length; i++) {
        var tile = myTileArray[i]
        if (tile.isTouching(player)) {

            tile.tileColor = "green"
            player.display();

        } else {

            tile.tileColor = "#b06c49";

        }
    }

    if (levelD === 1) {

        rock.display();
        rock.update();
        rock.isTouching(player);

    }
}

function level0() {

    if (introS === 0 && levelD === 1 && stage === 0) {

        intro.image = loadImage("images/win.png");

    }

}



function drawTiles() {
    //Tiles
    var tile1, tile2, tile3, tile4, tile5, tile6, tile7, tile8, tile9, tile10, tile11, tile12, tile13, tile14, tile15, tile16, tile17, tile18, tile19;

    //making them tiles
    tile1 = new Tile(100, 70, 70, 70);

    myTileArray.push(tile1)
    tile2 = new Tile(100, 160, 70, 70);
    myTileArray.push(tile2)

    tile3 = new Tile(100, 250, 70, 70);
    myTileArray.push(tile3)

    tile4 = new gTile(190, 70, 70, 70);
    myTileArray.push(tile4)

    tile5 = new gTile(190, 160, 70, 70);
    myTileArray.push(tile5)

    tile6 = new gTile(190, 250, 70, 70);
    myTileArray.push(tile6)

    tile7 = new gTile(190, 340, 70, 70);
    myTileArray.push(tile7)

    tile8 = new gTile(280, 70, 70, 70);
    myTileArray.push(tile8)

    tile9 = new Tile(280, 160, 70, 70);
    myTileArray.push(tile9)

    tile10 = new Tile(280, 250, 70, 70);
    myTileArray.push(tile10)

    tile11 = new Tile(280, 340, 70, 70);
    myTileArray.push(tile11)

    tile12 = new gTile(370, 70, 70, 70);
    myTileArray.push(tile12)

    tile13 = new gTile(370, 160, 70, 70);
    myTileArray.push(tile13)

    tile14 = new gTile(370, 250, 70, 70);
    myTileArray.push(tile14)

    tile15 = new Tile(370, 340, 70, 70);
    myTileArray.push(tile15)

    tile16 = new Tile(460, 70, 70, 70);
    myTileArray.push(tile16)

    tile17 = new Tile(460, 160, 70, 70);
    myTileArray.push(tile17)

    tile18 = new gTile(460, 250, 70, 70);
    myTileArray.push(tile18)

    tile19 = new Tile(460, 340, 70, 70);
    myTileArray.push(tile19);

}

function storyVoice() {

    foo = new p5.Speech();
    foo.speak('Rumors have spread about the hidden treasure of King Arthur the second. You, a talented adventurer have found the position of the pyrimid he hid it in. But to find it, you will need to go through the dangerous path that he had set. Good luck. Press p to start.');

}

function Incoming() {

    incoming = new p5.Speech();
    incoming.speak('Boulder Incoming! Run back before its too late!');

}

function onCanvasPressed(){

  fullscreen(true)

}
