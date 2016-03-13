$(window).scroll(function() {
if ($(this).scrollTop() > 1){
    $('.site-nav').addClass("sticky");
  }
  else{
    $('.site-nav').removeClass("sticky");
  }
});