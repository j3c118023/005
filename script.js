$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
      autoplay: true,
      // autoplayHoverPause: true, //if u want to pause on hover
      loop: true,
      items: 4,
      lazyLoad: true,
      autoplayTimeout:2500,
      margin: 5,
      stagePadding: 5,
      responsive: {
          0: {
              items: 1
          },
          485: {
              items: 2
          },
          728: {
              items: 3
          },
          960: {
              items:3
          },
          1200: {
              items:3
          }
      }
    });
  });