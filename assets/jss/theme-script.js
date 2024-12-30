(function ($) {
    'use strict';

    /*********************
    client for header down
    **********************/
    var clientLog = $('#twlf_client');
    clientLog.owlCarousel({
        loop:true,
        margin: 15,
        nav:false,
        dots:false,
        items:7,
        autoplay:true, 
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:7
            }
        }
    });
    /*********
    nav menu
    **********/
    var Mnav = $('header nav#mobileNav');
    if(Mnav !== '') {
        Mnav.meanmenu();
    }
    /**********
    back2Top
    ***********/
    var back = $("#back-to-top"),
    body = $("body, html");
    $(window).on('scroll', function () {
        if ($(window).scrollTop() > $(window).height())
        {
            back.css({bottom: '20px', opacity: '1', visibility: 'visible'});
        } else
        {
            back.css({bottom: '-20px', opacity: '0', visibility: 'hidden'});
        }
    });
    body.on("click", "#back-to-top", function (e) {
        e.preventDefault();
        body.animate({scrollTop: 0}, 500);
        return false;
    });

})(jQuery);