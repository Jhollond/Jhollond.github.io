$(document).ready(function() {

  $('#nav').affix({
      offset: {
        top: 200
      }
  });

  $('.slick-work').slick({
    arrows: false,
    fade: true,
    asNavFor: '.slick-nav',
    adaptiveHeight: true,
    autoplay: false,
    mobileFirst: true,
    LazyLoad: 'ondemand',
    centerMode: true,
    variableWidth: true
  });
  $('.slick-nav').slick({
    asNavFor: '.slick-work',
    arrows: false,
    dots: true,
    centerMode: true,
    focusOnSelect: true,
    mobileFirst: true,
    LazyLoad: 'ondemand',
    variableWidth: true
  });
});
