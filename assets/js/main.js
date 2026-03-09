
!(function($) {
  "use strict";

  // -------------------------------------------------------
  // Navbar: add/remove .scrolled class on scroll
  // -------------------------------------------------------
  $(window).on('scroll', function() {
    if ($(this).scrollTop() > 60) {
      $('#navbar').addClass('scrolled');
    } else {
      $('#navbar').removeClass('scrolled');
    }
  });

  // -------------------------------------------------------
  // Hero typed text
  // -------------------------------------------------------
  if ($('.typed').length) {
    var typed_strings = $(".typed").data('typed-items');
    typed_strings = typed_strings.split(',');
    new Typed('.typed', {
      strings: typed_strings,
      loop: true,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000
    });
  }

  // -------------------------------------------------------
  // Smooth scroll for nav links and .scrollto elements
  // -------------------------------------------------------
  $(document).on('click', '#navbar .navbar-nav a, .scrollto', function(e) {
    if (
      location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') &&
      location.hostname === this.hostname
    ) {
      var target = $(this.hash);
      if (target.length) {
        e.preventDefault();
        var scrollto = target.offset().top - 75;
        $('html, body').animate({ scrollTop: scrollto }, 1200, 'easeInOutExpo');

        // Close mobile menu if open
        if ($('#mainNav').hasClass('show')) {
          $('#mainNav').collapse('hide');
        }
        return false;
      }
    }
  });

  // Scroll to hash on page load
  $(document).ready(function() {
    if (window.location.hash) {
      var initial_nav = window.location.hash;
      if ($(initial_nav).length) {
        var scrollto = $(initial_nav).offset().top - 75;
        $('html, body').animate({ scrollTop: scrollto }, 1200, 'easeInOutExpo');
      }
    }
  });

  // -------------------------------------------------------
  // Active nav item on scroll (scrollspy)
  // -------------------------------------------------------
  var nav_sections = $('section');
  var main_nav = $('#navbar .navbar-nav');

  $(window).on('scroll', function() {
    var cur_pos = $(this).scrollTop() + 90;

    nav_sections.each(function() {
      var top    = $(this).offset().top,
          bottom = top + $(this).outerHeight();

      if (cur_pos >= top && cur_pos <= bottom) {
        main_nav.find('li').removeClass('active');
        main_nav.find('a[href="#' + $(this).attr('id') + '"]').closest('li').addClass('active');
      }

      if (cur_pos < 300) {
        main_nav.find('li').removeClass('active');
        main_nav.find('li:first').addClass('active');
      }
    });
  });

  // -------------------------------------------------------
  // Back to top button
  // -------------------------------------------------------
  $(window).on('scroll', function() {
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').css('display', 'flex').hide().fadeIn('slow');
    } else {
      $('.back-to-top').fadeOut('slow');
    }
  });

  $('.back-to-top').on('click', function() {
    $('html, body').animate({ scrollTop: 0 }, 1200, 'easeInOutExpo');
    return false;
  });

  // -------------------------------------------------------
  // Publications isotope filter
  // -------------------------------------------------------
  $(window).on('load', function() {
    var portfolioIsotope = $('.portfolio-container').isotope({
      itemSelector: '.portfolio-item',
      layoutMode: 'fitRows'
    });

    $('#portfolio-flters li').on('click', function() {
      $("#portfolio-flters li").removeClass('filter-active');
      $(this).addClass('filter-active');
      portfolioIsotope.isotope({ filter: $(this).data('filter') });
      AOS.refresh();
    });
  });

  // -------------------------------------------------------
  // Init AOS animations
  // -------------------------------------------------------
  $(window).on('load', function() {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
      offset: 60
    });
  });

})(jQuery);
