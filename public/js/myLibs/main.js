$(document).ready(function () {
	$('.header__burger').click(function (event) {
		$('.header__burger,.header__menu').toggleClass('active');
		$('body').toggleClass('lock');
	});
});


function resizeBlock() {
	if (window.matchMedia("screen and (max-width: 767px)").matches) {
		$('.header__list').append($('.header__location,.header__number,.header__callback'));
	}
	else if (window.matchMedia("screen and (min-width: 767px)").matches) {
		$('.header__location,.header__number,.header__callback').appendTo($('.header__row'));
	}
}

$(window).resize(function () {
	resizeBlock();
});

$(document).ready(function () {
	resizeBlock();
});

// function ibg() {

// 	$.each($('.ibg'), function (index, val) {
// 		if ($(this).find('img').length > 0) {
// 			$(this).css('background-image', 'url("' + $(this).find('img').attr('src') + '")');
// 		}
// 	});
// }

// ibg();

// function ibg(){

// 	let ibg=document.querySelectorAll(".ibg");
// 	for (var i = 0; i < ibg.length; i++) {
// 	if(ibg[i].querySelector('img')){
// 	ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')';
// 	}
// 	}
// 	}

// 	ibg();

function ibg() {
	let ibg = document.querySelectorAll('.ibg');
	for (const elem of ibg) {
		if (elem.querySelector('img')) {
			elem.style.backgroundImage = 'url(' + elem.querySelector('img').getAttribute('src') + ')';
		}
	};
}
ibg();

$(document).ready(function () {
	$('.banner-slider__body').slick({
		arrows: false,
		dots: true,
		autoplay: true,
		autoplaySpeed: 2000,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 1
				}
			}
		]
	});
});

$(document).ready(function () {
	$('.highlights-slider__body').slick({
		arrows: true,
		dots: false,
		autoplay: true,
		autoplaySpeed: 2000,
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 2
				}
			},
			{
				breakpoint: 993,
				settings: {
					slidesToShow: 1
				}
			}
		]
	});
});

// jQuery(window).on('resize', function () {
// 	var viewportWidth = jQuery(window).width();

// 	if (viewportWidth < 767) {
// 		$('.highlights-slider__body').slick('unslick');
// 	} else {
// 		// Do some thing
// 	}
// });



$('.highlights-slider__body').each(function () {

	var $this = $(this),
		$status = $this.closest('.highlights-slider').find('.slider-num');


	$this.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {

		var i = (currentSlide ? currentSlide : 0) + 1;
		$status.html('<span>' + (((i) < 10) ? "0" + (i) : i) + '</span>' + '<small>' + (((slick.slideCount) < 10) ? "0" + (slick.slideCount) : slick.slideCount) + '</<small>');
	});
});

$(document).ready(function () {
	// CHECKBOX
	$.each($('.checkbox'), function (index, val) {
		if ($(this).find('input').prop('checked') == true) {
			$(this).addClass('active');
		}
	});
	$(document).on('click', '.checkbox', function (event) {
		if ($(this).hasClass('active')) {
			$(this).find('input').prop('checked', false);
		} else {
			$(this).find('input').prop('checked', true);
		}
		$(this).toggleClass('active');

		return false;
	});

	// RADIO
	$.each($('.radiobuttons__item'), function (index, val) {
		if ($(this).find('input').prop('checked') == true) {
			$(this).addClass('active');
		}
	});
	$(document).on('click', '.radiobuttons__item', function (event) {
		$(this).parents('.radiobuttons').find('.radiobuttons__item').removeClass('active');
		$(this).parents('.radiobuttons').find('.radiobuttons__item input').prop('checked', false);
		$(this).toggleClass('active');
		$(this).find('input').prop('checked', true);
		return false
	});
});


