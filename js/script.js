$(document).ready(function () {
	$('.gallery-slider').slick({
		dots: true,
		slidesToShow: 1,
		infinite: true,
		autoplay: true,
		autoplaySpeed: 5000,
	});
	$('.header__burger').click(function (event) {
		$('.header__burger,.header__row,.header-nav__list,.header-nav__item,.header__logo,.header__name').toggleClass('active');
		$('body').toggleClass('lock');
	});
	$('.header-nav__item').click(function (event) {
		if ($(window).width() < 768) {
			$('body').toggleClass('lock');
			$('.header__burger,.header__row,.header-nav__list,.header-nav__item,.header__logo,.header__name').toggleClass('active');
		};
	});
});