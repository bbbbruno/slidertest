jQuery(window).scroll(function () {
  scrollHeight = jQuery(document).height();
  scrollPosition = jQuery(window).height() + jQuery(window).scrollTop();
  footHeight = jQuery(".footer").innerHeight();
  if (scrollHeight - scrollPosition <= footHeight - 250) {
    jQuery(".follow").css({
      "position": "absolute",
      "bottom": "350px",
      "top": "auto",
      "transform": "none"
    });
  } else {
    jQuery(".follow").css({
      "position": "fixed",
      "bottom": "auto",
      "top": "50%",
      "transform": "translateY(-50%)"
    });
  }
});

jQuery(window).scroll(function () {
  scrollHeight = jQuery(document).height();
  scrollPosition = jQuery(window).height() + jQuery(window).scrollTop();
  footHeight = jQuery(".footer").innerHeight();
  if (jQuery('.bottom').hasClass('menu_on')) {
    if (scrollHeight - scrollPosition <= footHeight + 67) {
      jQuery(".bottom").css({
        "position": "absolute",
        "bottom": "67px",
      });
    } else {
      jQuery(".bottom").css({
        "position": "fixed",
        "bottom": "0",
      });
    }
  } else {
    if (scrollHeight - scrollPosition <= footHeight + 170) {
      jQuery(".bottom").css({
        "position": "absolute",
        "bottom": "170px",
      });
    } else {
      jQuery(".bottom").css({
        "position": "fixed",
        "bottom": "0",
      });
    }
  }
});

// ハンバーガーメニュー
jQuery(function () {
  jQuery('.header-toggler').click(function (e) {
    e.preventDefault();
    jQuery(this).toggleClass('active');
    jQuery('.menu').fadeToggle(300);
    jQuery('.inner').fadeToggle(300);
    jQuery('footer.footer').fadeToggle(300);
    jQuery('.bottom').toggleClass('menu_on');
  });

  // トップへスクロール
  jQuery('.arrow').click(function (e) {
    e.preventDefault();
    jQuery('html, body').animate({
      scrollTop: 0,
    }, 500);
  });

  var slick = jQuery('#slide-list-slick').slick({
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
  var slider = jQuery('#slide-list-velocity').fireSlider({
    delay: 4000,
    slide: 'li',
    speed: 700,
    show: 'auto',
    hoverPause: true,
    next: jQuery('.arrow-r'),
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
  jQuery('.fire-slider-active').attr('data-fireslider-effect', 'slideInOut');
});