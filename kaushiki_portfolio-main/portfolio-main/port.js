$(document).ready(function () {

    /* =========================================
       STICKY NAVBAR
       ========================================= */

    $(window).scroll(function () {

        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }


        /* =========================================
           SCROLL-UP BUTTON
           ========================================= */

        if (this.scrollY > 500) {
            $('.scroll-up-btn').addClass("show");
        } else {
            $('.scroll-up-btn').removeClass("show");
        }

    });


    /* =========================================
       SCROLL TO TOP
       ========================================= */

    $('.scroll-up-btn').click(function () {

        $('html, body').animate({
            scrollTop: 0
        }, 600);

    });


    /* =========================================
       NAVIGATION LINKS
       ========================================= */

    $('.navbar .menu li a').click(function () {

        // Keep smooth scrolling
        $('html').css("scrollBehavior", "smooth");

        // Close mobile menu
        $('.navbar .menu').removeClass("active");
        $('.menu-btn i').removeClass("active");

    });


    /* =========================================
       MOBILE MENU
       ========================================= */

    $('.menu-btn').click(function () {

        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");

    });


    /* =========================================
       TYPING ANIMATION - HOME
       ========================================= */

    new Typed(".typing", {

        strings: [
            "Data Analyst",
            "Python Programmer",
            "Competitive Programmer"
        ],

        typeSpeed: 90,
        backSpeed: 60,
        backDelay: 1200,
        loop: true

    });


    /* =========================================
       TYPING ANIMATION - ABOUT
       ========================================= */

    new Typed(".typing-2", {

        strings: [
            "Data Analyst",
            "Python Programmer",
            "Competitive Programmer"
        ],

        typeSpeed: 90,
        backSpeed: 60,
        backDelay: 1200,
        loop: true

    });


});