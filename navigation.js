$(document).ready(function() {
    var offset = 66;
    $('body').scrollspy({
        target: ".navbar",
        offset: offset
    });
    $("a.navigation").on('click', function(event) {
        if (this.hash !== "") {
            console.log(this.hash);
            var hash = this.hash;
            event.preventDefault();

            $('html, body').animate({
                scrollTop: $(hash).offset().top - offset + 30
            }, 1000);
            if ($(document).width() <= 992) {
                setTimeout(function() {
                    $(".navbar-collapse").collapse('hide');
                }, 500);
            };
        };
    });

    $("#contacts button").click(function() {
        $('html, body').animate({
            scrollTop: $("#map").offset().top - 65
        }, 1000);
    });

    var nav_li_active = "#25b976";
    $(".btn-phone").click(function() {
        for (i = 0; i < 4; i++) {
            $("#call").animate({
                outlineColor: nav_li_active
            }).animate({
                outlineColor: '#ffffff'
            });
        };
    });

    // for sticky form on resizable screen
    if ($(document).width() <= 767) {
        $('#services-row').removeClass('row-eq-height');
        $('.examples-box').removeClass('row-eq-height');
        $("#call").trigger("sticky_kit:detach");
    } else {
        $('#services-row').addClass('row-eq-height');
        $('.examples-box').addClass('row-eq-height');
        $("#call").stick_in_parent({
            offset_top: 65
        });
    };

    $(window).resize(function() {
        if ($(document).width() <= 767) {
            $('#services-row').removeClass('row-eq-height');
            $('.examples-box').removeClass('row-eq-height');
            $("#call").trigger("sticky_kit:detach");
        } else {
            $('#services-row').addClass('row-eq-height');
            $('.examples-box').addClass('row-eq-height');
            $("#call").stick_in_parent({
                offset_top: 65
            });
        };
    });


    $(".call-icon").click(function() {
        for (i = 0; i < 4; i++) {
            $("#call h4").animate({
                color: nav_li_active
            }).animate({
                color: '#000'
            });
        };
        $('html, body').animate({
            scrollTop: $("#call").offset().top - 65
        }, 1000);
    });

    // colapse navbar on scroll

        // Run function when scrolling
        $(window).scroll(function() {
            // console.log($('nav').offset().top);
            if ($(".navbar-collapse").hasClass("in")) {
                setTimeout(function() {
                    // $('.navbar-toggle').click();
                    $(".navbar-collapse").collapse('hide');
                }, 500);
            };
        });

});
