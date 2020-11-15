$(document).ready(function(){
    $(".toggle-button").click(function(){
        $(".top-item").toggle();
        $(".top-item-login").toggle();
    });
    $(".pizza1").click(function(){
        $(".container-pizza").empty();
        $(".container-pizza").load("html/pizza.html");

    });
});


