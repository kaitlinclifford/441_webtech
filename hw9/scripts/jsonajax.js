 $(document).ready(function () {
            $("button").click(function () {
                $.getJSON("data/west.json", function(result){
                  $.each(result, function(i, field){
                    $("div").append(field + " ");
                  });
                });
              });
            });
