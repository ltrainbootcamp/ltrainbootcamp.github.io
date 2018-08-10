// Create the functions once the document is ready.

$(document).ready(function(){

    $(".activate").click(function(){
        $("p").toggle("slow");
    });

   // $("button").click(function(){
   //     $("p").fade(5000);
   // });
            //
//    $("button").click(function(){
//        $("p").toggle("fast");
//    });
//
//    $("button").click(function(){
//        $("p").fadeToggle("slow");
//    });


// Have a panel slide up and down

    $("#flip").click(function(){
        $("#panel").slideToggle("slow");
    });

// Animation Example. Edit the values (speed, opacity etc)

    $(".box").click(function(){
        var greenbox = $(".greenbox");
        greenbox.animate({height: '300px', opacity: '0.4'}, "slow");
        greenbox.animate({width: '300px', opacity: '0.8'}, "slow");
        greenbox.animate({height: '100px', opacity: '0.4'}, "slow");
        greenbox.animate({width: '100px', opacity: '0.8'}, "slow");
    });

});
