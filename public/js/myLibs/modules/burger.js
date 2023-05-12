const isMobile = {
	Android: function () { return navigator.userAgent.match(/Android/i); },
	BlackBerry: function () { return navigator.userAgent.match(/BlackBerry/i); },
	iOS: function () { return navigator.userAgent.match(/iPhone|iPad|iPod/i); },
	Opera: function () { return navigator.userAgent.match(/Opera Mini/i); },
	Windows: function () { return navigator.userAgent.match(/IEMobile/i); },
	any: function () { return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows()); }
};

if (isMobile.any()) {
	document.body.classList.add('touch');
	let menuArrow = document.querySelectorAll('.menu__arrow');
	if (menuArrow.length > 0) {
		for (const elem of menuArrow) {
			elem.addEventListener('click', function (e) {
				elem.parentElement.classList.toggle('active');
			});
		}
	}
} else {
	document.body.classList.add('pc');
}

// Меню бургер

const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');
if (iconMenu) {
	iconMenu.addEventListener('click', function (e) {
		document.body.classList.toggle('lock');
		iconMenu.classList.toggle('active');
		menuBody.classList.toggle('active');
	});
}

// Прокрутка при клике

const menuLinks = document.querySelectorAll('.menu__link[data-goto]');
if (menuLinks.length > 0) {
	for (const elem of menuLinks) {
		elem.addEventListener('click', function (e) {
			const elem = e.target;
			if (elem.dataset.goto && document.querySelector(elem.dataset.goto)) {
				const gotoBlock = document.querySelector(elem.dataset.goto);
				const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;
				if (iconMenu.classList.contains('active')) {
					document.body.classList.remove('lock');
					iconMenu.classList.remove('active');
					menuBody.classList.remove('active');
				}
				window.scrollTo({
					top: gotoBlockValue,
					behavior: "smooth"
				});
				e.preventDefault();
			}
		});
	};
}