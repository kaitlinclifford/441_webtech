// Create object class
class Object{
    constructor(x, y, width, height, color) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color;
    }
}

let object1 = new Object(20, 400, 250, 250, "rgb(157, 28, 236)");
let object2 = new Object(200, 40, 75, 75, "rgb(17, 159, 212)");
let object3 = new Object(700, 100, 100, 100, "rgb(242, 158, 33)");


var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var ctx2 = canvas.getContext("2d");
var ctx3 = canvas.getContext("2d");


setInterval(update, 1000/60);
drawSquare();

function update()
{
    object2.x -= 20;
    if (object2.x <= 0 || object2.x >= 715) {
        object2.x *= -20;
    }

    object2.y -= 20;
    if (object2.y <= 0 || object2.y >= 925) {
        object2.y *= -20;
    }

    drawSquare();
}

function update()
{
  object3.x -= 20;
  if (object3.x <= 0 || object3.x >= 715) {
      object3.x *= -20;
  }

  object3.y -= 20;
  if (object3.y <= 0 || object3.y >= 925) {
      object3.y *= -20;
  }
  drawSquare();
}
function drawSquare()
{
    ctx.clearRect(0,0,1000,750);
    ctx.fillStyle = object1.color;
    ctx.fillRect(object1.x, object1.y, object1.width, object1.height);
    ctx2.fillStyle = object2.color;
    ctx2.fillRect(object2.x, object2.y, object2.width, object2.height);
    ctx3.fillStyle = object3.color;
    ctx3.fillRect(object3.x, object3.y, object3.width, object3.height);
}

$(document).ready(function(){
    $(this).keypress(function(event){
        getKey(event);
    });
});

function getKey(event)
{
    var char = event.which || event.keyCode;
    var actualThing = String.fromCharCode(char);
    if(actualThing == "w")
        {
            moveUp();
        }
    else if(actualThing == "a")
        {
            moveLeft();
        }
    else if(actualThing == "d")
        {
            moveRight();
        }
    else if(actualThing == "s")
        {
            moveDown();
        }
  drawSquare();
    }

    function moveUp()
        {
            object1.y -= 25;
        }
    function moveLeft()
        {
            object1.x -= 25;
        }
    function moveRight()
        {
            object1.x += 25;
        }
    function moveDown()
        {
            object1.y += 25;
        }
