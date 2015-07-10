// Shirnks the header child image when the user scrolls - Pages effected are in the childs profile
$(function(){
 var shrinkHeader = 200;
  $(window).scroll(function() {
    var scroll = getCurrentScroll();
      if ( scroll >= shrinkHeader ) {
           $('.childheader').addClass('shrink');
        }
        else {
            $('.childheader').removeClass('shrink');
        }
  });
function getCurrentScroll() {
    return window.pageYOffset || document.documentElement.scrollTop;
    }
});
