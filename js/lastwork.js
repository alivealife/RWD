$(document).ready(function () {
    $('.ham-menu-open').click(function (e) {
        e.preventDefault();        
        $('.aside').slideDown();
    });
    $('.ham-menu-close').click(function (e) {
        e.preventDefault();        
        $('.aside').slideUp();
    });
    $('.favorite').click(function (e) {
        e.preventDefault();        
        $(this).toggleClass('far').toggleClass('fas');
    });
});