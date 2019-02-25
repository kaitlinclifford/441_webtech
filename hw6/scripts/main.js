// create an array of image names that correspond to the image tags
//the imageTags variable allows me to have a table full of Images
//and hard code in all of the images that will be in there.
var imageTags = ["image1", "image2", "image3", "image4", "image5", "image6", "image7", "image8", "image9", "image10"];
// this is where I tell image for blank image
var blankImagePath = "images/bt21.jpg";
var firstNumber = -1;
var secondNumber = -1;
// JSON declaration
var playerInfo = {"firstname":"", "lastname":"", "age":"", "score":""};

// created a variable with the blank image name
// created an empty array for the actual images
var actualImages = new Array();
var attempts = 0;


function printBlanks()
{
   // this function creates a random image so that
   //each game is differently played
    createRandomImageArray();
    // for loop to help show how many images to cycle through
    for(var i = 0; i < imageTags.length; i++)
    {
    // iterate through the image tag ids and sets the source
        document.getElementById(imageTags[i]).src= blankImagePath;
    }

}

function createRandomImageArray()
{
    // create an array of actual images to input the actual images when
    //blanks are flipped over
    var actualImagePath = ["images/chimmy.jpg", "images/cooky.jpg",  "images/mang.jpg", "images/shooky.jpg", "images/tata.jpg"];

    // create another array to make sure the images only get added twice
    //wasn't sure if I needed 10 of these for each image, but
    //I think I do so that each image cycles through to see if it has been
    //added 2 times or not
    var count = [0,0,0,0,0,0,0,0,0,0];
    // create a while statement to check to see if our actual image array is full
    //it's 10 because that's how many images you have in your imageTags variable
    while(actualImages.length < 10)
    {
      //this is the confusing math part... go back and watch video again
      //in order to REALLY understand

        // get a random number between 0 and the number total number of images that we can choose from
        var randomNumber = Math.floor(Math.random() * actualImagePath.length);
          // create an if statement that says if the total number added is less than 2, then
        // add the image to the actual image array
        if(count[randomNumber] < 2)
        {
            actualImages.push(actualImagePath[randomNumber]);
            // then add one to the array that makes sure only two images can be added
            count[randomNumber] = count[randomNumber] + 1;
        }
    }


}

//this function is explanitory... it's the flipping image function
function flipImage(number)
{
        // make the second image appear
        if(firstNumber >= 0)
        {
            secondNumber = number;
            document.getElementById(imageTags[number]).src = actualImages[secondNumber];

        }
        else if(firstNumber < 0) // make the first image appear
        {
            firstNumber = number;
            document.getElementById(imageTags[firstNumber]).src= actualImages[firstNumber];

        }

        // check to see if the images do not match
        if(actualImages[secondNumber] != actualImages[firstNumber] && firstNumber >= 0 && secondNumber >= 0)
        {
            setTimeout(imagesDisappear, 1000); // calls a method after 1 second
        }
        // check to see if the images do match
        else if(actualImages[secondNumber] == actualImages[firstNumber] && firstNumber >= 0 && secondNumber >= 0)
        {
            firstNumber = -1;
            secondNumber = -1;
            attempts++;
            return attempts;

        }

}


function imagesDisappear()
{

    console.log(firstNumber);
    document.getElementById(imageTags[firstNumber]).src = blankImagePath;
    document.getElementById(imageTags[secondNumber]).src = blankImagePath;
    firstNumber = -1;
    secondNumber = -1;
}


// I want to give credit for the code past this point to ChristoffSomm...
// I tried for about 2 days trying to get the code to come out on the
// last page and I couldn't figure it out... after looking at his code,
// it really helped me know what I should have done... Honeslty I was
// pretty close, I was just trying to put everything into 1 function instead
// of doing multiple.
function addInfo(){
	var firstName = document.getElementById("txtFirstName").value;
	var lastName = document.getElementById("txtLastName").value;
	var age = document.getElementById("txtAge").value;

    playerInfo.firstname = firstName;
    playerInfo.lastname = lastName;
    playerInfo.age = age;

    localStorage.setItem("player", JSON.stringify(playerInfo));

    window.location = "index.html";
}

function player(){
    playerInformation = localStorage.getItem("player");
    playerInfo = JSON.parse(playerInformation);
}

function finalPage() {
    playerInfo.score = attempts;

    localStorage.setItem("player", JSON.stringify(playerInfo));
    window.location = "last.html";
}


function loadScore (){
    document.getElementById('fNames').innerHTML = playerInfo.firstname + " " + playerInfo.lastname;
    document.getElementById('age').innerHTML = "Age: " + playerInfo.age;
    document.getElementById('score').innerHTML = "Your Score: " + playerInfo.score;

}
