// Размеры окна бразуера
// clientWidth и clientHeight

// Доступная ширина и высота ====================
const mainElement = document.documentElement;
const mainElementWidth = mainElement.clientWidth;
const mainElementHeiht = mainElement.clientHeight;

console.log(mainElementWidth);
console.log(mainElementHeiht);

//------------------------

// Ширина и высота окна вместе с полосами прокрутки ====================
const windowWidth = window.innerWidth;
const windowHeigth = window.innerHeight;

console.log(windowWidth);
console.log(windowHeigth);

// Ширина и высота документа включая прокрученую часть ====================
let scrollWidth = Math.max(
	document.body.scrollWidth, document.documentElement.scrollWidth,
	document.body.offsetWidth, document.documentElement.offsetWidth,
	document.body.clientWidth, document.documentElement.clientWidth
);
let scrollHeight = Math.max(
	document.body.scrollHeight, document.documentElement.scrollHeight,
	document.body.offsetHeight, document.documentElement.offsetHeight,
	document.body.clientHeight, document.documentElement.clientHeight
);

console.log(scrollWidth);
console.log(scrollHeight);

// Получить кол-во прокрученных пикселей ====================
// Только для чтения
const windowScrollTop = window.pageYOffset;
const windowScrollLeft = window.pageXOffset;

console.log(windowScrollTop);
console.log(windowScrollLeft);

// Управление прокруткой страницы ==================================================
// Метод scrollBy(x,y) прокручивает страницу относительно её текущего положения ====================

function setScrollBy() {
	window.scrollBy(0, 50);
	const windowScrollTop = window.pageYOffset;
	console.log(windowScrollTop);
}

// Метод scrollTo(pageX, pageY) прокручивает страницу на абсолютные ====================
// координаты (pageX, pageY). Тоже самое что и window.scroll()

function setScrollTo() {
	window.scrollTo(0, 50);
	const windowScrollTop = window.pageYOffset;
	console.log(windowScrollTop);
}

function setScrollToOptions() {
	window.scrollTo({
		top: 500,
		left: 0,
		// smooth, instant,
		// либо auto; по умолчанию auto
		behavior: "smooth"
	});
}
// Опции не работают в Safari

/* 
Вызов elem.scrollIntoView(top) прокручивает страницу, ====================
чтобы elem оказался вверух. У него есть один аргумент:

- если top = true(по умолчанию), то страница будет прокручена,
чтобы elem появился в верхней части окна.
- если top = false(по умолчанию), то страница будет прокручена,
чтобы elem появился внизу.
*/
function setScrollIntoView(top) {
	const lessonSelected = document.querySelector('.lesson__selected');
	lessonSelected.scrollIntoView(top);
}

function setScrollIntoViewOptions(top) {
	const lessonSelected = document.querySelector('.lesson__selected');
	lessonSelected.scrollIntoView({
		block: "center",
		inline: "nearest",
		behavior: "smooth"
	});
}
// Опции не работают в Safari

// Запретить прокрутку ====================
function setEnableDisableScroll() {
	//document.body.style.ovelflow = "hidden";
	document.body.classList.toggle('scroll-lock');
}

// Метрики элементов на странице ==================================================

// Получаем объект
const block = document.querySelector('.button-scroll');

// Позиции объекта 
// Свойства offsetParent, offsetLeft и offsetTop

// Получаем родительский элемент относительно которого позицианирован наш объект
const elementOffsetParent = block.offsetParent;

console.log(elementOffsetParent);

// Получаем позациюю объекта относительного предка (offsetParent) ====================
const elementOffsetLeft = block.offsetLeft;
const elementOffsetTop = block.offsetTop;

console.log(elementOffsetLeft);
console.log(elementOffsetTop);

// Общие размеры объекта offsetWidth и offsetHeight ====================

// Получаем размеры объекта
const elementOffsetWidth = block.offsetWidth;
const elementOffsetHeight = block.offsetHeight;

console.log(elementOffsetWidth);
console.log(elementOffsetHeight);
// Метрики для не показываемых элементов равны нулю

// Отступы внутренней части элемента от внешней ====================
// clientTop и clientLeft

const elementClientTop = block.clientTop;
const elementClientLeft = block.clientLeft;

console.log(elementClientTop);
console.log(elementClientLeft);

// Размеры объекта без рамок и полосы ====================
// прокрутки clientWidth и clientHeight 

const elementClientWidth = block.clientWidth;
const elementClientHeight = block.clientHeight;

console.log(elementClientWidth);
console.log(elementClientHeight);

// Общая ширина (offsetWidth) - рамка слева - рамка справа - скролл

// Размеры объекта включающие в себя прокрученную часть ====================
// В остальном работают как clientWidth/clientHeight,
// scrollWidth/scrollHeight

const elementScrollWidth = block.scrollWidth;
const elementScrollHeight = block.scrollHeight;

console.log(elementScrollWidth);
console.log(elementScrollHeight);

// Размеры прокрученной области ====================
// scrollLeft и scrollTop

block.scrollTop = 150;

const elementScrollLeft = block.scrollLeft;
const elementScrollTop = block.scrollTop;

console.log(elementScrollLeft);
console.log(elementScrollTop);


// Координаты ==================================================
/*
Большинство соответствующих методов JavaScript работают в 
одной из двух указаных ниже систем координат:

1. Относительно окна браузера.
(как position: fixed, отсчёт идет от верхнего левого угла окна)
Принято обозначать clientX/clientY.
2. Относительно документа.
(как position: absolute, относительно <body>, отсчёт идёт от
	верхнего левого угла документа)
	Принято обозначать pageX/pageY.

	Когда страница полностью прокручена в самое начало,
	то верхний левый угол окна совпадает с левым верхним
	углом документа, при этом обе этих системы координат тоже совпадают.
	Но если происходит прокрутка, то координаты элементов в
	контексте окна меняются, так как они двигаются,
	но в то же время их координаты относительно
	документа остаются такими же.
*/

// Координаты относительно окна браузера ====================
// getBoundingClientRect

// Получаем координаты относительно окна браузера
const getItemCoords = block.getBoundingClientRect();

console.log(getItemCoords);

// Получаем конкретную координату относительно окна браузера
const getItemLeftCoords = block.getBoundingClientRect().left;

console.log(getItemLeftCoords);

// Координаты относительно документа ====================
// getBoundingClientRect

// Получаем конкретную координату относительно окна браузера
const getItemTopCoords = block.getBoundingClientRect().top;

// Получаем конкретную координату относительно документа
const getItemTopDocumentCoords = getItemTopCoords + window.pageYOffset;

console.log(getItemTopCoords);
console.log(getItemTopDocumentCoords);

// Получение объекта по координатам ====================
// document.elementFromPoint(x, y);

const elem = document.elementFromPoint(100, 100);

console.log(elem);

///////////////////////////////////////////////////////////////