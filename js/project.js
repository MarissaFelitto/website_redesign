
// menu toggle

$(document).ready(function(){
    $(".contact").click(function(){
        $(".icons").slideToggle("fast");
    });
});

// hover mobile 

$('.hover').on("touchstart", function (e) {
    'use strict'; //satisfy code inspectors
    var link = $(this); //preselect the link
    if (link.hasClass('hover')) {
        return true;
    } else {
        link.addClass('hover');
        $('.hover').not(this).removeClass('hover');
        e.preventDefault();
        return false; //extra, and to make sure the function has consistent return points
    }
});
