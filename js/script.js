$(document).ready(function () {
  $(".slider-info__content").slick({
    slidesToShow: 1,
    arrows: true,
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3500,
  });
  $(".popular-products__slider").slick({
    slidesToShow: 4,
    arrows: true,
    dots: false,
    infinite: true,
    autoplay: false,
    autoplaySpeed: 1500,
    variableWidth: true,
    centerMode: false,
    responsive:[
      {
        breakpoint:480,
        settings:{
          variableWidth: false,
          slidesToShow: 1,
        }
    }]
  });
  
  $('.header__burger').click(function(event) {
    $('.header__burger,.menu__body').toggleClass('active');
    $('body').toggleClass('lock');
  })

});



