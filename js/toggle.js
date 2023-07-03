$(document).ready(function(){
    $(".humburger-menu").click(function(){
        $(".menu").slideToggle();
    })
    $(".dropdown").click(function(){
        $(".dropdown .dropdown-menu").slideToggle();
    })
})