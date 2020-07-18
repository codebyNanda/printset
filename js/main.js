
$(function () {
    $('.carousel-banner').slick({
      arrows:false,
      autoplay:true,
      dots:true
    });
    $('.carousel-brands').slick({
      infinite: true,
      slidesToShow: 5,
      slidesToScroll: 5
    });
    $('[data-toggle="tooltip"]').tooltip()
  })