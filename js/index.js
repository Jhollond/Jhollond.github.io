$(document).ready(function() {

  $('#nav').affix({
      offset: {
        top: 200
      }
  });

  $('.slick-work').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slick-nav',
    adaptiveHeight: true,
    autoplay: false,
    mobileFirst: true,
    LazyLoad: 'ondemand',
    centerMode: true
  });
  $('.slick-nav').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.slick-work',
    arrows: false,
    dots: true,
    centerMode: true,
    focusOnSelect: true,
    mobileFirst: true,
    LazyLoad: 'ondemand'
  });
});
