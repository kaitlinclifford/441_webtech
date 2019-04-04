
        $(document).ready(function () {
             $("button").click(function () {
                       $("#bikeInformation").load("data/west.json", function(responseText){
                           var westWorld = JSON.parse(responseText);
                           var theFinalStuff = "";
                           for (i = 0; i < westWorld.episodes.length; i++) {
                            theFinalStuff = theFinalStuff + ("West World " + "<br> Episode: " + westWorld.episodes[i].name
                         + "<br>Season: " + westWorld.episodes[i].season + "<br>Episode Number: " + westWorld.episodes[i].number + "<br>Airdate: " + westWorld.episodes[i].airdate + "<br>Summary: "
                         + westWorld.episodes[i].summary) + "<br /><br/>";
                           }
                           $("#bikeInformation").html(theFinalStuff);
                       });
                   });
               });
      //end MC


// var showArray = new Array();
// var i = 0;
// var x = 1;
//
// class show {
//   constructor(name, season, number, airdate, summary) {
//       this.name = name;
//       this.season = season;
//       this.number = number;
//       this.airdate = airdate;
//       this.summary = summary;
//   }
//     toStringName(){
//         return this.name;
//     }
//     toStringSeason(){
//         return this.season;
//     }
// 	  toStringNumber(){
//         return this.number;
//     }
// 	  toStringAirdate(){
//         return this.airdate;
//     }
//     toStringSummary() {
//         return this.summary;
//     }
// }
//
// $(function() {
// 	$.getJSON("data/west.json", function(result){
// 		$.each(result.show, function(x, item){
// 			showArray.push(item);
// 		   });
// 		showTv();
// 	});
// });
//
// function showTv(){
//
// 	for (i = 0; i < showArray.length; i++) {
// 				$("#name" + [i]).append("Name: " + showArray[i].name);
// 				$("#season" + [i]).append("<br>Season: " + showArray[i].season);
// 				$("#number" + [i]).append("<br>Number: " + showArray[i].number);
// 				$("#airdate" + [i]).append("<br>Airdate: " + showArray[i].airdate);
//         $("summary" + [i]).append("<br>Summary: " + showArray[i].summary);
// 			}
// }
