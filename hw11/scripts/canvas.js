var canvas;
var ctx;
var x = 50;
var y = 50;
var square1;
var stuff1, stuff2, stuff3, stuff4;
var direction;
var questions;
var squareArray = [];
var lives = 1;
$(document).ready(function(){

    setup();

    $(this).keypress(function(event){
        getKey(event);

    });
});



function setup()
{
    canvas = document.getElementById("myCanvas");
    ctx = canvas.getContext("2d");

    // create two objects
    square1 = new Square(100,100,50,50,"rgb(255, 248, 79)");

    stuff1 = new Square(850, 445, 20,20,"rgb(71, 71, 219)");
	  stuff2 = new Square(700,650,20,20,"rgb(50, 252, 174)");
    stuff3 = new Square(500,445,20,20,"rgb(207, 17, 96)");
    stuff4 = new Square(1000, 100, 30, 30, "rgb(18, 237, 224)");



    $.getJSON("data/information.json", function(data) {
        for(var i = 0; i < data.squares.length; i++)
        {
            squareArray.push(new Square(data.squares[i].x,data.squares[i].y, data.squares[i].h, data.squares[i].w, data.squares[i].color));
        }
        drawSquare();
    });



}

function getKey(event)
{
    var char = event.which || event.keyCode;
    var actualLetter = String.fromCharCode(char);
    if(actualLetter == "w")
    {
        moveUp();
        direction = "up";
    }
    if(actualLetter == "s")
    {
        moveDown();
        direction = "down";
    }
    if(actualLetter == "a")
    {
        moveLeft();
        direction = "left";
    }
    if(actualLetter == "d")
    {
        moveRight();
        direction = "right";
    }

// added new stuff under here

var check = false;
for(var i = 0; i < squareArray.length; i++){

    check = hasCollided(square1,squareArray[i]);
    if(check === true){
        break;
    }
}


var stuffOne = false;
    stuffOne = hasCollided(square1,stuff1);
    if(stuffOne === true){
  lives++;
  stuff1 = new Square(0, 0, 0,0,"rgb(71, 71, 219)");
    }

var stuffTwo = false;
    stuffTwo = hasCollided(square1,stuff3);
    if(stuffTwo === true){
  lives++;
  stuff3 = new Square(0, 0, 0,0,"rgb(50, 252, 174)");
    }

var stuffThree = false;
    stuffThree = hasCollided(square1,stuff2);
    if(stuffThree === true){
  lives++;
  stuff2 = new Square(0, 0, 0,0,"rgb(207, 17, 96)");
    }

var stuffFour = false;
    stuffFour = hasCollided(square1,stuff4);
    if(stuffFour === true){
  lives++;
  stuff4 = new Square(0, 0, 0,0,"rgb(18, 237, 224)");
  }


if(check){
    if(direction === "left"){moveRight();}
    else if(direction === "right"){moveLeft();}
    else if(direction === "up"){moveDown();}
    else if(direction === "down"){moveUp();}
}
drawSquare();

}


// added new stuff before here

function moveUp()
{
    square1.y-=10;
}
function moveDown()
{
    square1.y+=10;
}
function moveRight()
{
    square1.x+=10;
}
function moveLeft()
{
    square1.x-=10;
}

function drawSquare()
{
    ctx.clearRect(0,0,1400,800);
    ctx.fillStyle = square1.mainColor;
    ctx.fillRect(square1.x, square1.y, square1.width, square1.height);

    // ctx.fillStyle = square2.mainColor;
    // ctx.fillRect(square2.x, square2.y, square2.width, square2.height);
    ctx.fillStyle = stuff1.mainColor;
        ctx.fillRect(stuff1.x, stuff1.y, stuff1.width, stuff1.height);

    	ctx.fillStyle = stuff2.mainColor;
        ctx.fillRect(stuff2.x, stuff2.y, stuff2.width, stuff2.height);

    	ctx.fillStyle = stuff3.mainColor;
    ctx.fillRect(stuff3.x, stuff3.y, stuff3.width, stuff3.height);

    ctx.fillStyle = stuff4.mainColor;
  ctx.fillRect(stuff4.x, stuff4.y, stuff4.width, stuff4.height);


    for(var i = 0; i < squareArray.length; i++)
    {
        ctx.fillStyle = squareArray[i].mainColor;
        ctx.fillRect(squareArray[i].x, squareArray[i].y, squareArray[i].width, squareArray[i].height);
    }

    ctx.font = "30px Arial";
    ctx.fillText("Lives: " + lives, 10, 50);

}

function hasCollided(object1, object2) {
    return !(
        ((object1.y + object1.height) < (object2.y)) ||
        (object1.y > (object2.y + object2.height)) ||
        ((object1.x + object1.width) < object2.x) ||
        (object1.x > (object2.x + object2.width))
    );
}







// information.json information

// {"squares":[{"x":800,"y":500,"h":30,"w":30,"color":"rgb(71, 71, 219)"},
//     {"x":200,"y":200,"h":40,"w":40,"color":"rgb(50, 252, 174)"},
//     {"x":275,"y":600,"h":75,"w":75,"color":"rgb(207, 17, 96)"},
//     {"x":675,"y":175,"h":100,"w":100,"color":"rgb(18, 237, 224)"}
//     ]}
