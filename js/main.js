$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
})
/*scroll*/
$(".down ").on('click', function () {
    'use strict';
    $('html, body').animate({
        scrollTop: $('.What-we-offer').offset().top -200
    }, 800);
});