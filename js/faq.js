// Accordian
var action="click";
var speed="500";

$(document).ready(function() {
    // Question handler
    $('.faq-item button').on(action, function() {
        // Get next element
        $(this).next()
            .slideToggle(speed)
        // Select all other answers
                .siblings('.faq-content')
                    .slideUp();
    });
});