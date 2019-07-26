$(function () {
  var slick = $('#slide-list-slick').slick({
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    variableWidth: true,
    autoplay: true,
    prevArrow: false,
    cssEase: 'ease-in-out',
    transformEnabled: false,
    responsive: [{
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        variableWidth: false,
      }
    }]
  });
  var slider = $('#slide-list-velocity').fireSlider({
    delay: 4000,
    slide: 'li',
    speed: 700,
    show: 'auto',
    hoverPause: true,
    next: $('.arrow-r'),
  });
  var slideInOut = function (el, options) {
    var duration = (options.snapping) ? 0 : options.speed;
    el.velocity({
      translateX: [(options.nextPos + '%'), (options.currPos + 100 + '%')]
    }, {
      duration: duration,
      queue: options.effect,
      easing: options.easing
    });
  };
  fireSlider.prototype.Effects.register('slideInOut', slideInOut);
  $('.fire-slider-active').attr('data-fireslider-effect', 'slideInOut');
});