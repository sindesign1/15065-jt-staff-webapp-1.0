// Shirnks the header child image when the user scrolls - Pages effected are in the childs profile
var Main = {

    init: function() {
        Main.events();
    // Main.findChildHeaderHeight();
    },

    events: function() {
        $(window).scroll(function() {

            if ( !window.mainModalOpened ) {
                var shrinkHeader = 203;
                var scroll = Main.getCurrentScroll();
                if ( scroll >= shrinkHeader ) {
                    console.log('main:shrinking...');
                    $('.childheader').addClass('shrink');
                    $('.messageSidebar').addClass('fixed');
                    $('.childFixed').addClass('fixed');
                }
                else {
                    console.log('main:expanding...');
                    $('.childheader').removeClass('shrink');
                    $('.messageSidebar').removeClass('fixed');
                    $('.childFixed').removeClass('fixed');
                }
            }
        });
    },

    getCurrentScroll: function() {
        return window.pageYOffset || document.documentElement.scrollTop;
    },
}

$(document).ready(function(){
    Main.init();
});

$(document).ready(function() {
    $( ".childheader" ).click(function() {
         $(this).removeClass("shrink");
    });
});
