$(document).ready(function () {

    $("#jokeButton").click(function(e){
        e.preventDefault();

        $.getJSON("http://api.icndb.com/jokes/random", 
            function (data) {
                $.each(data, function (index, item) { 
                     $("#text").html(`
                     ${item.joke}`);
                });
            }
        );
    });
});

