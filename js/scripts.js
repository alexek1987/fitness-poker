
    (function($) {
  "use strict";
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 72)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });


  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });


  $('body').scrollspy({
    target: '#mainNav',
    offset: 75
  });

  var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-scrolled");
    } else {
      $("#mainNav").removeClass("navbar-scrolled");
    }
  };
  navbarCollapse();
  $(window).scroll(navbarCollapse);


  $('#portfolio').magnificPopup({
    delegate: 'a',
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    mainClass: 'mfp-img-mobile',
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0, 1]
    },
    image: {
      tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
    }
  });

})(jQuery);





let countdown;
  const timerDisplay = document.querySelector('.display_time_left');
  const buttons = document.querySelectorAll('[data-time');


  function timer(seconds) {
    clearInterval(countdown);
    const now = Date.now();
    const then = now + seconds * 1000;
    displayTimeLeft(seconds);
    countdown = setInterval(() => {
    const secondsLeft = Math.round((then - Date.now()) / 1000);
      if(secondsLeft < 0) {
      clearInterval(countdown);
      return;
      }
      displayTimeLeft(secondsLeft);
    }, 1000);
  }

    function displayTimeLeft(seconds) {
      const minutes = Math.floor(seconds / 60);
      const remainderSeconds = seconds % 60;
      const display = `${minutes}:${remainderSeconds < 10 ? '0' : '' }${remainderSeconds}`;
      document.title = display;
      timerDisplay.textContent = display;
    }


   function startTimer() {
    const seconds = parseInt(this.dataset.time);
    countDownMusic()
    timer(10);
      setTimeout(function() {
      showStopButton()
      timer(seconds)
    }, 10000);
  }


    buttons.forEach(button => button.addEventListener('click', startTimer));
    // document.customForm.addEventListener('submit', function(e) {
    //   e.preventDefault();
    //   const mins = this.minutes.value;
    //   timer(mins * 60);
    //   this.reset();
    // })


    function stop() {
      document.getElementById("stopButton").style.display = "none";
      clearInterval(countdown);
    }

    function showTimerControls() {
      document.getElementById("timerButtons").style.display = "block";
    }
    function hideTimerControls() {
      document.getElementById("timerButtons").style.display = "none";
    }

    function hidePlayButton() {
      document.getElementById("playButton").style.display = "none";
    }

    function showPlayButton() {
      document.getElementById("playButton").style.display = "block";
    }

    function hideStopButton() {
      document.getElementById("stopButton").style.display = "none";
    }

    function showStopButton() {
      document.getElementById("stopButton").style.display = "block";
    }


    const countdownMusic = new Audio('countdown.mp3');
    function countDownMusic() {
      countdownMusic.play()
    }
















