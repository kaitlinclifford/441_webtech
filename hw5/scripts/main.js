// create an array of image names that correspond to the image tags
//the imageTags variable allows me to have a table full of Images
//and hard code in all of the images that will be in there.
var imageTags = ["image1", "image2", "image3", "image4", "image5", "image6", "image7", "image8", "image9", "image10"];
// this is where I tell image for blank image
var blankImagePath = "images/bt21.jpg";
// created an empty array for the actual images
var actualImages = new Array();

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
//here are extra images that I thought I needed, but not so sure anymore, so I'm putting them
//right here so I can quickly add if needed...
//, "images/rj.jpg","images/koya.jpg","images/alltogether.jpg", "images/fourtogether.jpg", "images/van.jpg"

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
    document.getElementById(imageTags[number]).src= actualImages[number];
        // this should be a quick function that just changes
        // the image based on what number was pressed


}
