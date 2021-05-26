$(document).ready(function () {

    $("#jokeButton").click(function(e){
        e.preventDefault();

        $(this).html("¿Con que sí te atreves? Inténtalo de nuevo");
        $(this).click(function (e) {
            e.preventDefault();
            $(this).html("Ya veo que vas en serio y por eso...");
            $(this).click(function (e) {
                    e.preventDefault();
                    $(".imageContainer").remove();
                    $("#jokeButton").remove();
                    $(".container").prepend("<img src ='images/norrisPunch.gif' style='margin: auto'>");
                    $(".container").append("<p style= 'color:red; text-align:center; font-size:30px'>¡Lo conseguiste!</p>");
                    $("body").css({"background-color":"white"});
            })
        });

        fetch("http://api.icndb.com/jokes/random")
        .then(response => response.json())
        .then (data => { 
            $.each(data, function (index, item) {
                         $("#text").html(`
                         ${item.joke}`);
            })
        }); 
    });
    
});

