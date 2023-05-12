// const { default: Swiper } = require("swiper");

// Инициализируем Swiper
let myImageSlider = new Swiper('.image-slider', {
	// Стрелки
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev'
	},
	// Навигация
	// Буллеты, текущее положение, прогрессбар
	pagination: {
		el: '.swiper-pagination',
		/*
		// Буллеты
		clickable: true,
		// Динамические буллеты
		dynamicBullets: true,
		// Кастомные буллеты
		renderBullet: function (index, className) {
			return '<span class="' + className + '">' + (index + 1) + '</span>';
		}
		*/

		// // Фракция
		// type: 'fraction',
		// // Кастомный вывод фракции
		// renderFraction: function (currentClass, totalClass) {
		// 	return 'Фото <span class="' + currentClass + '"></span>' + ' из ' + '<span class="' + totalClass + '"></span>';
		// },
		/*
		// Прогрессбар
		type: 'progressbar'
		*/
	},

	// Скролл
	// scrollbar: {
	// 	el: '.swiper-scrollbar',
	// 	// Возможность перетаскивать скролл
	// 	draggable: true
	// },

	// Включение/Отключение перетаскивания на ПК
	simulateTouch: true,
	// Чувствительность свайпа
	toucRatio: 1,
	// Угол срабатывания свайпа/перетаскивания
	touchAngle: 45,
	// Курсор перетаскивания
	grabCursor: true,
	// Переключение при клике на слайд
	slideToClickedSlide: false,

	// Навигация по хешу
	hashNavigation: {
		// Отслеживать состояние
		watchState: true,
	},
	// Управление клавиатурой
	keyboard: {
		// Включить\выключить только когда слайдер в пределах вьюпорта
		onlyInViewport: true,
		// Включить\выключить управление клавишами pageUp, pageDown
		pageUpDown: true,
	},
	// Управление колесом мыши
	mousewheel: {
		// Чувствительность колеса мыши
		sensitivity: 1,
		// Класс объекта на котором будет срабатывать прокрутка мышью
		// eventsTarget: ".image-slider"
	},

	// Автовысота
	autoHeight: true,

	// Количество слайдов для показа
	slidesPerView: 3, // 'auto'

	// Отключение функционала если слайдов меньше чем нужно
	// watchOverflow: true,

	// Отступ между слайдами
	spaceBetween: 30,

	// Количество пролистывыемых слайдов
	slidesPerGroup: 1,

	// Активный слайд по центру
	// centeredSlides: true,

	// Стартовый слайд
	// initialSlide: 0,

	// // Бесконечный слайдер
	// loop: true,

	// // Колво дублирующих слайдов для auto
	// loopedSliders: 3,

	// Свободный режим 
	// freeMode: true,

	// Автопрокрутка
	// autoplay: {
	// 	// Пауза между прокруткой
	// 	delay: 1000,
	// 	// Закончить на последнем слайде
	// 	stopOnLastSlide: true,
	// 	// Отключить после ручного переключения
	// 	disableOnInteraction: false
	// },

	// Скорость
	// speed: 800,

	// Вертикальный слайдер
	// direction: 'vertical',

	// // Эффекты переключения слайдов. Листание
	// effect: 'fade',

	// // Дополнение к fade
	// fadeEffect: {
	// 	// Параллельная смена прозрачности
	// 	crossFade: true
	// },

	// Эфекты переключение слайдов. Переворот
	// effect: 'flip',

	// // Дополнение к flip
	// flipEffect: {
	// 	// Тень
	// 	slideShadows: true,
	// 	// Показ только активного слайда
	// 	limitRotation: true
	// },

	// // Эфекты переключение слайдов. Куб
	// effect: 'cube',
	// // Дополнение к cube

	// cubeEffect: {
	// 	// Настройки тени
	// 	slideShadows: true,
	// 	shadow: true,
	// 	shadowOffset: 20,
	// 	shadowScale: 0.94
	// },

	// // Эфекты переключение слайдов. Эффект потока
	// effect: 'coverflow',
	// // Дополнение к coverflow

	// coverflowEffect: {
	// 	// Угол
	// 	rotate: 20,
	// 	// Наложение
	// 	stretch: 50,
	// 	// Тень
	// 	slideShadows: true,
	// },

	// Брейк поинты (адаптив). Ширина экрана
	// breakpoints: {
	// 	320: {
	// 		slidesPerView: 1,
	// 	},
	// 	480: {
	// 		slidesPerView: 2,
	// 	},
	// 	992: {
	// 		slidesPerView: 3,
	// 	}
	// },

	// Миниатюры (превью)
	// thumbs: {
	// 	// Свайпер с мениатюрами и его настройки
	// 	swiper: {
	// 		el: '.image-mini-slider',
	// 		slidesPerView: 6,
	// 	}
	// },

	// Обновить свайпер при изменении элементов слайдера
	observer: true,
	// Обновить свайпер при изменении родительских элементов слайдера
	observerParents: true,
	// Обновить свайпер при изменении дочерних элементов слайда
	observerSlideChildren: true,

	// Виртуальные слайд и формирование слайдера
	// virtual: {
	// 	slides: (function () {
	// 		let slide = []
	// 		for (let i = 0; i < 500; i++) {
	// 			slide.push(`<div class="image-slider__text">Слайд №${i}</div>`);
	// 		}
	// 		return slide;
	// 	}()),
	// },

});



// Слайдер в слайдере
new Swiper('.image-in-slider', {
	// Курсор перетаскивания
	grabCursor: true,
	// Навигация, пагинация, текущее положение, прогрессбар
	pagination: {
		el: '.swiper-pagination',
		// Буллеты
		clickable: true,
	},
	// Корректная работа перетаскивания\свайпа для дочернего слайдера
	nested: true,
});

// Текстовый слайдер
let myTextSlider = new Swiper('.text-slider', {
	// Количество слайдов для показа
	slidesPerView: 3,
	// Отступ между слайдами
	spaceBetween: 30,
});

// Передача управления
myImageSlider.controller.control = myTextSlider;
myTextSlider.controller.control = myImageSlider;