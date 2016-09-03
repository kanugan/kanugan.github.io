var method_update_nav = function() {
  var buffer = 200;
  var horizontal_switch_point = 1200;
  var vertical_switch_point = $('.carousel-indicators').offset().top - buffer;
  var window_top = Math.round($(window).scrollTop());
  
  if ($(window).width() <= horizontal_switch_point || window_top >= vertical_switch_point) {
    $('nav').removeClass('top');
    $('nav').addClass('bottom');
    $('#top-logo').hide();
    $('#bottom-logo').show();
  } else {
    $('nav').removeClass('bottom');
    $('nav').addClass('top');
    $('#top-logo').show();
    $('#bottom-logo').hide();
  }
};

var method_click_scroll = function(e) {
  e.preventDefault();

  var target = this.hash;

  $("html, body").animate({
    scrollTop: $(target).offset().top// - 50
  }, 600);
};

var main = function() {
  /* ADDING SWIPE SUPPORT FOR MOBILE DEVICES */
  $('.carousel').bcSwipe({ threshold: 50 });
  /* End ADDING SWIPE SUPPORT */

  /* UPDATE NAV */
  method_update_nav();
  $(window).resize(method_update_nav);
  $(window).scroll(method_update_nav);
  /* End UPDATE NAV */

  /* LINK SCROLL */
  $('.scroll').click(method_click_scroll);
  /* End LINK SCROLL */

  /* RETURN TO TOP SCROLL */
  $(window).scroll(function() {
    if ($(window).scrollTop() > 200) {        // If page is scrolled more than 500px
        $('.return-to-top').fadeIn('100');    // Fade in the arrow
    } else {
        $('.return-to-top').fadeOut('slow');   // Else fade out the arrow
    }
  });
  $('.return-to-top').click(method_click_scroll);
  /* End RETURN TO TOP SCROLL */  

  /* SOCIAL ICONS */
  $('.social-icon').mouseenter(function () {
    $(this).find('img').animate({
    opacity: 0.6
    },50);
  });
  $(".social-icon").mouseleave(function () {
    $(this).find('img').animate({
    opacity: 1.0
    },50);
  });
  /* End SOCIAL ICONS */
  
  // Close the Hamburger Menu after Item Click
  $('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
  });
  
  // Highlight the top nav as scrolling occurs
  $('body').scrollspy({
    target: '.navbar-fixed-top'
  })



};

$(document).ready(main);