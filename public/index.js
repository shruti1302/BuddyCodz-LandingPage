particlesJS('particles-js', {
  particles: {
    number: { value: 160, density: { enable: true, value_area: 800 } },
    color: { value: '#ffffff' },
    shape: {
      type: 'circle',
      stroke: { width: 0, color: '#000000' },
      polygon: { nb_sides: 5 },
      image: { src: 'img/github.svg', width: 100, height: 100 },
    },
    opacity: {
      value: 0.5,
      random: false,
      anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false },
    },
    size: {
      value: 3,
      random: true,
      anim: { enable: false, speed: 40, size_min: 0.1, sync: false },
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: '#ffffff',
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: true,
      speed: 3,
      direction: 'none',
      random: true,
      straight: false,
      out_mode: 'out',
      bounce: false,
      attract: { enable: false, rotateX: 600, rotateY: 1200 },
    },
  },
  interactivity: {
    detect_on: 'window',
    events: {
      onhover: { enable: true, mode: 'repulse' },
      onclick: { enable: false, mode: 'remove' },
      resize: true,
    },
    modes: {
      grab: { distance: 0, line_linked: { opacity: 1 } },
      bubble: {
        distance: 1500,
        size: 48.72463273808071,
        duration: 1.7865698670629593,
        opacity: 0.7308694910712106,
        speed: 3,
      },
      repulse: { distance: 140, duration: 0.4 },
      push: { particles_nb: 4 },
      remove: { particles_nb: 2 },
    },
  },
  retina_detect: true,
});

(function ($) {
  $.fn.visible = function (partial) {
    var $t = $(this),
      $w = $(window),
      viewTop = $w.scrollTop(),
      viewBottom = viewTop + $w.height(),
      _top = $t.offset().top,
      _bottom = _top + $t.height(),
      compareTop = partial === true ? _bottom : _top,
      compareBottom = partial === true ? _top : _bottom;

    return compareBottom <= viewBottom && compareTop >= viewTop;
  };
})(jQuery);

var win = $(window);

var allMods = $('.module');

allMods.each(function (i, el) {
  var el = $(el);
  if (el.visible(true)) {
    el.addClass('already-visible');
  }
});

win.scroll(function (event) {
  allMods.each(function (i, el) {
    var el = $(el);
    if (el.visible(true)) {
      el.addClass('come-in');
    }
  });
});

$('.navbar-collapse a').click(function () {
  $('.navbar-collapse').collapse('hide');
});

$('.navbar-collapse .btn').click(function () {
  $('.navbar-collapse').collapse('hide');
});
