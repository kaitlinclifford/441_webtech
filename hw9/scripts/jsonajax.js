
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
