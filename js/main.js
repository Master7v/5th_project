/*jslint browser: true*/
/*global $, jQuery, alert*/

$(document).ready(function(){
    $('.testomnial').owlCarousel({
        center: true,
        items: 3,
        loop: true,
        margin: 10,
        nav: true,
        dots: false
    });

    $('#clients .container').owlCarousel({
        center: true,
        items: 5,
        loop: true,
        margin: 10,
        nav: true,
        dots: false
    });

    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if(scroll < 100){
            $('.sticky-top').css('background', 'transparent');
            $('.nav_img').attr('src','img/logo-light.png');
            $('nav ul li a').css('color','#fff');
        } else{
            $('.sticky-top').css('background', 'rgb(255, 255, 255)');
            $('.nav_img').attr('src','img/logo-dark.png');
            $('nav ul li a').css('color','#000');
        }
    });
});

jQuery(document).ready(function($){
    $('#count .counter').counterUp({
        delay: 10,
        time: 1000
    });   
    var fadeSpeed = 300;
    $('.dropdown-menu,.dropdown-item').on({
        mouseenter: function() {
            $('.dropdown-item').stop(true, true).fadeIn(fadeSpeed);
        },
        mouseleave: function() {
            $('.dropdown-item').stop(true, true).fadeOut(fadeSpeed);
        }
    });
});



