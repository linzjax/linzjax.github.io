$(window).scroll(function() {
if ($(this).scrollTop() > 1){
    $('.site-nav').addClass("sticky");
  }
  else{
    $('.site-nav').removeClass("sticky");
  }
});

$('.site-nav-hamburger').on('click', function(e){
  e.preventDefault();
  $('.site-nav-hamburger').toggleClass('active');
  $('.site-nav-body').toggleClass('hidden');
  $('.site-nav').toggleClass('active');
});

$('.page-link').on('click', function(e){
  $('.site-nav-hamburger').toggleClass('active');
  $('.site-nav-body').toggleClass('hidden');
  $('.site-nav').toggleClass('active');
});