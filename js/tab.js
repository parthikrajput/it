$(document).ready(function () {
    $('.gal-tab').click(function () {
        $('.gal-tab').removeClass("active");
        $(this).addClass("active");
        return false;
    });
});
$(document).ready(function () {

    $(".gal-tab").click(function () {
        var value = $(this).attr('data-filter');

        if (value == "all") {
            $('.filter').show('5000');
        }
        else {
            $(".filter").not('.' + value).hide('5000');
            $('.filter').filter('.' + value).show('5000');
        }
    });
});