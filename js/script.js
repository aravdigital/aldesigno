//JavaScript

// hide menu when click outside of it ...
$(document).mouseup(function (e) {
    var menu = $("#mbLinks");
    if (!menu.is(e.target)
    && menu.has(e.target).length === 0
    ) {
        menu.hide('500');
        $('.menu-close').hide();
        $('.menu-open').show();
    }
});


// jQuery 
$(document).ready(function () {

    // mobile menu open
    $(".menu-open").click(function (event) {
        var x = $(this).index('.menu-open');
            $("#mbLinks:eq(" + x + ")").css("display") == "none"
            $("#mbLinks:eq(" + x + ")").show('500');
            $('.menu-open').hide();
            $('.menu-close').show();
    });
    
    // mobile menu close
    $(".menu-close").click(function (event) {
        var y = $(this).index('.menu-close');
        $("#mbLinks:eq(" + y + ")").css("display") == "block"
        $("#mbLinks:eq(" + y + ")").hide('500');
        $('.menu-close').hide();
        $('.menu-open').show();
    });

    // mobile buttons on scroll
    $('.mb-about-me').click(function () {
        $('html, body').animate({
            scrollTop: $('#aboutMe').offset().top
        }, 500)
        $("#mbLinks").hide('400')
        $('.menu-close').hide();
        $('.menu-open').show();
    });
    $('.mb-portfolio').click(function () {
        $('html, body').animate({
            scrollTop: $('#portfolio').offset().top
        }, 500)
        $("#mbLinks").hide('400')
        $('.menu-close').hide();
        $('.menu-open').show();
    });
    $('.mb-skills').click(function () {
        $('html, body').animate({
            scrollTop: $('#skills').offset().top
        }, 500)
        $("#mbLinks").hide('400')
        $('.menu-close').hide();
        $('.menu-open').show();
    });

    // laptop buttons on scroll
    $('.aboutMe-js').click(function () {
        $('html, body').animate({
            scrollTop: $('#aboutMe').offset().top
        }, 500);
    });
    $('.portfolio-js').click(function () {
        $('html, body').animate({
            scrollTop: $('#portfolio').offset().top
        }, 500);
    }); 
    $('.skills-js').click(function () {
        $('html, body').animate({
            scrollTop: $('#skills').offset().top
        }, 500);
    });
    $('.contact-js').click(function () {
        $('html, body').animate({
            scrollTop: $('#contact').offset().top
        }, 500);
    });

    // theme change from dark to light mode and return...
    $(function() {

        // dark mode active
        $(".dark-mode").click(function () {
            $(":root").css("--bg-color", "#f4f4f4");
            $(":root").css("--primary-color", "#0099ff");
            $(":root").css("--light-color", "#626262");
            $(":root").css("--light-gray-color", "#404040");
            $(":root").css("--hover-color", "#003983");
            $(":root").css("--header-color", "#dddddd");
            $(".dark-mode").hide();
            $(".light-mode").show();
            $(".dark-bar").hide();
            $(".light-bar").show();
            $(".dark-mb-logo").hide();
            $(".light-mb-logo").show();
        });

        // light mode active
        $(".light-mode").click(function () {
            $(":root").css("--bg-color", "#333333");
            $(":root").css("--primary-color", "#ffffff");
            $(":root").css("--light-color", "#ebebeb");
            $(":root").css("--light-gray-color", "#d4d4d4");
            $(":root").css("--hover-color", "#cbcbcb");
            $(":root").css("--header-color", "#404040");
            $(".light-mode").hide();
            $(".dark-mode").show();
            $(".light-bar").hide();
            $(".dark-bar").show();
            $(".light-mb-logo").hide();
            $(".dark-mb-logo").show();
        });

    });

});

// Aldo Nezha