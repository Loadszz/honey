//**********************************************
// Цикл WHILE

// while (Условие) {
// 	// Тело цикла
// 	// Тут будет выполняться код
// }

// let num = 0;             true = Бежим
// while (num < 5) {
// 	console.log(num);
// 	num++;
// } 

// let num = 5;  				  false = Нет
// while (num) {
// 	console.log(num);
// 	num--;
// }

// Пример без {}
// let num = 5;
// while (num) console.log(num--);

//**********************************************

// Конструкция DO...WHILE

// let = num = 0;
// do {
// 	console.log(num);
// 	num++;
// } while (num < 0);

//**********************************************

// Цикл FOR

// Синтаксис
// for (Начало; Условие; Шаг) {
// 	// Тело цикла
// 	// Тут будет выполняться код

// Пример
// for (let num = 0; num < 5; num++) {
// 	console.log(num);

// }
/*
Работа цикла for:
1) Выполняется начало - let num = 0
2) Выполняется условие - num < 5
3) Если условие true выполняется тело цикла - console.log(num)
4) Выполняется шаг - num++
Повтор начиная с пункта №2
*/

//"Встроенное" обьявление переменной
// for (let num = 0; num < 5; num++) {
// 	console.log(num);
// }

// Существующая переменная
// let num;
// for (num = 0; num < 5; num++) {
// 	console.log(num);
// }
// console.log(`Вывод вне цикла: ${num}`);

//**********************************************

// Директива break

// let num = 0;
// for (; num < 5; num++) {
// 	console.log(num);
// 	if (num == 2) break;
// }
// console.log(`Работа окончена, num = ${num}`);

//**********************************************

// Директива continue

// let num = 0;
// for (; num < 5; num++) {
// 	if (num == 2) continue;
// 	console.log(num);
// }

//**********************************************

// Метки

// firstFor: for (let num = 0; num < 2; num++) {
// 	for (let size = 0; size < 3; size++) {
// 		if (size == 2) {
// 			break firstFor
// 		}
// 		console.log(size);
// 	}
// }

// firstFor: for (let num = 0; num < 2; num++) {
// 	for (let size = 0; size < 3; size++) {
// 		if (size == 2) {
// 			continue firstFor
// 		}
// 		console.log(size);
// 	}
// }

//**********************************************

// Итоги
/*
1.	while – Проверяет условие перед каждой итерацией.
2.	do..while – Проверяет условие после каждой итерации.
3.	for (;;) – Проверяет условие перед каждой итерацией,
	есть возможность задать дополнительные настройки.

Чтобы организовать бесконечный цикл, используют
конструкцию while (true).
При этом он, как и любой другой цикл, может быть
прерван директивой break.

Если на данной итерации цикла делать больше
ничего не надо, но полностью прекращать цикл не
следует – используют директиву continue.

Обе этих директивы поддерживают метки, которые ставятся
перед циклом. Метки – единственный способ для break/continue
выйти за пределы текущего цикла, повлиять на выполнение внешнего.
Помним, что метки не позволяют прыгнуть в произвольное место кода,
в JavaScript нет такой возможности.

Конечно же в JavaScript существуют и другие методы перебора.
Например, перебор объектов или массивов. О них мы поговорим
в отдельных уроках, а пока домашка.
*/

