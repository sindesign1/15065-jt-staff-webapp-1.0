// Shirnks the header child image when the user scrolls - Pages effected are in the childs profile
var Main = {

    init: function() {
        Main.events();
    // Main.findChildHeaderHeight();
    },

    events: function() {
        $(window).scroll(function() {
            var shrinkHeader = 203;
            var scroll = Main.getCurrentScroll();
            if ( scroll >= shrinkHeader ) {
                $('.childheader').addClass('shrink');
            }
            else {
                $('.childheader').removeClass('shrink');
            }
        });
    },

    getCurrentScroll: function() {
        return window.pageYOffset || document.documentElement.scrollTop;
    },

    // findChildHeaderHeight: function() {
    //   var $childHeader = $('body').find('#addchildHeader');
    //   console.log($childHeader);
    //   var $childContent = $('body').find('#childContent');
    //   console.log($childContent);
    //   var height = $childHeader.height();

    //   var contentMargin = height + 20;
    //   var px = 'px';

    //   $childContent.css('margin-top', "'" + contentMargin + px + "'");
    // }
}

// $(function(){
//  var shrinkHeader = 200;
//   $(window).scroll(function() {
//     var scroll = getCurrentScroll();
//       if ( scroll >= shrinkHeader ) {
//            $('.childheader').addClass('shrink');
//         }
//         else {
//             $('.childheader').removeClass('shrink');
//         }
//   });
// function getCurrentScroll() {
//     return window.pageYOffset || document.documentElement.scrollTop;
//     }
// });
// 

$(document).ready(function() {
    $( ".childheader" ).click(function() {
         $(this).removeClass("shrink");
    });
});

$(document).ready(function(){
    Main.init();
});
