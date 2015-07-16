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
                    $('.MessageThreadNames').addClass('fixed');
                }
                else {
                    console.log('main:expanding...');
                    $('.childheader').removeClass('shrink');
                    $('.messageSidebar').removeClass('fixed');
                    $('.childFixed').removeClass('fixed');
                    $('.MessageThreadNames').removeClass('fixed');
                }
            }
        });

        $('body').on('click touch', '#help1', Main.showHelp1);
        $('body').on('click touch', '#help2', Main.showHelp2);
        $('body').on('click touch', '#help3', Main.showHelp3);
        $('body').on('click touch', '#help4', Main.showHelp4);
        $('body').on('click touch', '#help5', Main.showHelp5);
        $('body').on('click touch', '#help6', Main.showHelp6);
    },

    getCurrentScroll: function() {
        return window.pageYOffset || document.documentElement.scrollTop;
    },

    showHelp1: function() {
        $('#help1Tab').fadeIn();
        $('#help2Tab').hide();
        $('#help3Tab').hide();
        $('#help4Tab').hide();
        $('#help5Tab').hide();
        $('#help6Tab').hide();
    },

    showHelp2: function() {
        $('#help2Tab').fadeIn();
        $('#help1Tab').hide();
        $('#help3Tab').hide();
        $('#help4Tab').hide();
        $('#help5Tab').hide();
        $('#help6Tab').hide();
    },

    showHelp3: function() {
        $('#help3Tab').fadeIn();
        $('#help2Tab').hide();
        $('#help1Tab').hide();
        $('#help4Tab').hide();
        $('#help5Tab').hide();
        $('#help6Tab').hide();
    },

    showHelp4: function() {
        $('#help4Tab').fadeIn();
        $('#help2Tab').hide();
        $('#help3Tab').hide();
        $('#help1Tab').hide();
        $('#help5Tab').hide();
        $('#help6Tab').hide();
    },

    showHelp5: function() {
        $('#help5Tab').fadeIn();
        $('#help2Tab').hide();
        $('#help3Tab').hide();
        $('#help4Tab').hide();
        $('#help1Tab').hide();
        $('#help6Tab').hide();
    },

    showHelp6: function() {
        $('#help6Tab').fadeIn();
        $('#help2Tab').hide();
        $('#help3Tab').hide();
        $('#help4Tab').hide();
        $('#help5Tab').hide();
        $('#help1Tab').hide();
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
