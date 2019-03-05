var array = new Array();
var images = ['images/bts2013.jpg', 'images/bts2014.png', 'images/bts2015.jpg', 'images/bts2016.jpg', 'images/bts2017.jpg'];

class finderClass
{
	constructor (Title, Author, Year, Description){
		this.Title = Title;
		this.Author = Author;
		this.Year = Year;
		this.Description = Description;
	}

	toStringTitle(){
		return this.Title;
	}
	toStringAuthor(){
		return "Author: " + this.Author;
	}
	toStringYear(){
		return "Year: " + this.Year;
	}
	toStringDescription(){
		return "Description: " + this.Description;
	}
}

function initializeArray() {

	var pic1 = new finderClass("No More Dream", "BTS", "2013", "This photo starts as the beginning of BTS's career. In 2013, BigHit's newest Kpop group BTS debuted with their single No More Dream. In the beginning, they weren't very popular since they were competing among other well known groups such as Big Bang. Now they've grown exponentially in popularity, and have shown the world a whole new side to what Kpop can be.");
	var pic2 = new finderClass("Danger", "BTS", "2014", "BTS's new album, Dark & Wild was released in 2014. With their next single, Danger, they had started gaining popularity. At the end of the year, BTS was recognized with several New Artist of the Year awards, including the 2013 Melon Music Awards and Golden Disc Awards as well as the 2014 Seoul Music Awards");
	var pic3 = new finderClass("Run", "BTS", "2015", "During 2015, BTS was really rising to fame, especially with their latest album The Most Beautiful Moment in Life pt 1. Not only did their latest album come out, but they toured Japan for the first time, and also held their second solo concert in Korea, BTS Live Trilogy – Episode 1: BTS Begins.");
	var pic4 = new finderClass("Fire", "BTS", "2016", "The Most Beautiful Moment in Life, Pt 1 & 2 were combined into the Young Forever edition and was supported by three singles: Epilogue: Young Forever, Fire and Save Me. A two-day concert at the Olympic Gymnastics Arena in Seoul was held in May to support the album, followed by their Asia tour. The group also headlined both US KCON shows held that year in New Jersey and Los Angeles, to sold out audiences. Young Forever later won Album of the Year at the year-end Melon Music Awards, becoming the group's first major grand prize (daesang).");
	var pic5 = new finderClass("DNA at American Music Awards", "BTS", "2017", "With BTS's growing popularity, they were invited to perform their latest single at the American Music Awards. This was not only a big deal for BTS, but for Kpop in general, since they were the first Korean group to not only be invited to, but also perform at an event like this.");



    array.push(pic1,pic2,pic3,pic4,pic5);
}

function accessInformation() {
	var rand = Math.floor(Math.random() * images.length);

			document.getElementById("Artwork").src= images[rand];
			document.getElementById("Title").innerHTML = array[rand].toStringTitle();
			document.getElementById("Author").innerHTML = array[rand].toStringAuthor();
			document.getElementById("Year").innerHTML = array[rand].toStringYear();
			document.getElementById("Description").innerHTML = array[rand].toStringDescription();

}
