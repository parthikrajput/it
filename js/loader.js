$(window).on('load',function(){
    $(".loader").delay(1500).fadeOut(800);
    $(".loader-1").delay(1800).fadeOut(1800);
    function removeloading(){
        $("body").removeAttr('class')
    }
    setInterval(removeloading,2000)
});