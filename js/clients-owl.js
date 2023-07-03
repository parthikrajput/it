$(document).ready(function () {
    var owl = $('.clients .owl-carousel');
    owl.owlCarousel({
        margin: 10,
        nav: true,
        loop: true,
        autoplay: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 5
            }
        }
    })
})