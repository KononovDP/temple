$(document).ready(function() {

  $('.header__burger').on('click', function(e) {
    e.preventDefault();
    $(this).toggleClass('open');
    $('.header').toggleClass('header--opened')
  })

	$('.sidebar__nav--mob .sidebar__nav__link').on('click', function(e) {
    e.preventDefault();
    $('.sidebar').toggleClass('sidebar--opened');
		$('.sidebar__nav').toggleClass('sidebar__nav--active');
  })
  
});