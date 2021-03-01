$(function(){

  $(".rate-star").rateYo({
      rating: 5,
      starWidth: "12px",
      readOnly: true
    });

  $('.product-slider__inner').slick({
      dots: true,
      slidesToShow: 4,
      arrows: false,
      slidesToScroll: 4,
  });
    

  var mixer = mixitup('.products__inner-box');

    
});