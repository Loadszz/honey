import React, { ReactNode, useState } from 'react';
import Header from './header/Header';
import Footer from './footer/Footer';
import Head from 'next/head';
import context from '@/contexts/context';



export default function Layout({ children }) {
	const [products, setProducts] = useState([
		{
			id: 1,
			image: 'detailsProductBig.png',
			image1: 'detailsProductBig.png',
			image2: 'detailsProductBig.png',
			text: 'Фісташковий бісквіт, крем маракуйя з маскарпоне, желе манго-маракуйя, з шматочками банану, свіжої м`яти, мадагаскарської ванілі та лікеру granmarnier. Всередині рідка капсула маракуйя-манго, крем Шанті з м`якоттю кокоса. Вкритий лаймовою глазурью. Основа з кармелізованим кокосом, білим шоколадом і пудрою лайма.',
			name: 'Торт',
			title: 'WINTER FROST',
			flavor: [{
				image: 'smack-1.jpg',
				item: 'Nuage',
			},
			{
				image: 'smack-2.jpg',
				item: 'Альфонсо',
			},
			{
				image: 'smack-3.jpg',
				item: 'Exotic',
			},
			{
				image: 'smack-4.jpg',
				item: 'Ейфорія',
			},
			{
				image: 'smack-5.jpg',
				item: 'Папа Руж',
			},
			{
				image: 'smack-6.jpg',
				item: 'None',
			}],
			weight: ['1 кг', '2 кг', 'Інше'],
			price: 1010,
			quantity: 1,
			button: 'Замовити',
			link: 'Детальніше',
			interesting: 'Y',
			filterCategory: ['Для чоловіків', 'Для жінок', 'Nuage'],
			categories: 'Торти',
			category: 'products__category--to-order',
			backgroundChange: 'products__column--color',
			energyValue: ['Білки − 6,37 г', 'Жири − 23,2 г', 'Вуглеводи − 12,8 г', 'Калорійність − 280 кКал']
		},
		{
			id: 2,
			image: 'block-15.png',
			image1: 'block-15.png',
			image2: 'block-15.png',
			text: 'Фісташковий бісквіт, крем маракуйя з маскарпоне, желе манго-маракуйя, з шматочками банану, свіжої м`яти, мадагаскарської ванілі та лікеру granmarnier. Всередині рідка капсула маракуйя-манго, крем Шанті з м`якоттю кокоса. Вкритий лаймовою глазурью. Основа з кармелізованим кокосом, білим шоколадом і пудрою лайма.',
			name: 'Еклер',
			title: 'ФІСТАШКОВИЙ',
			flavor: [],
			weight: [],
			price: 145,
			quantity: 1,
			button: 'Замовити',
			link: 'Детальніше',
			interesting: 'Y',
			filterCategory: ['Для чоловіків', 'Для жінок', 'Nuage'],
			categories: 'Еклери',
			category: 'products__category--in-stock',
			backgroundChange: 'products__column--border',
			energyValue: ['Білки − 6,37 г', 'Жири − 23,2 г', 'Вуглеводи − 12,8 г', 'Калорійність − 280 кКал']
		},
		{
			id: 3,
			image: 'block-16.png',
			image1: 'block-16.png',
			image2: 'block-16.png',
			text: 'Фісташковий бісквіт, крем маракуйя з маскарпоне, желе манго-маракуйя, з шматочками банану, свіжої м`яти, мадагаскарської ванілі та лікеру granmarnier. Всередині рідка капсула маракуйя-манго, крем Шанті з м`якоттю кокоса. Вкритий лаймовою глазурью. Основа з кармелізованим кокосом, білим шоколадом і пудрою лайма.',
			name: 'Торт',
			title: 'CHRISTMAS MOOD',
			flavor: [{
				image: 'smack-1.jpg',
				item: 'Nuage',
			},
			{
				image: 'smack-2.jpg',
				item: 'Альфонсо',
			},
			{
				image: 'smack-3.jpg',
				item: 'Exotic',
			},
			{
				image: 'smack-4.jpg',
				item: 'Ейфорія',
			},
			{
				image: 'smack-5.jpg',
				item: 'Папа Руж',
			},
			{
				image: 'smack-6.jpg',
				item: 'None',
			}],
			weight: ['1 кг', '2 кг', 'Інше'],
			price: 1005,
			quantity: 1,
			button: 'Замовити',
			link: 'Детальніше',
			interesting: 'Y',
			filterCategory: ['Для чоловіків', 'Для жінок', 'Nuage'],
			categories: 'Торти',
			category: 'products__category--to-order',
			backgroundChange: 'products__column--color',
			energyValue: ['Білки − 6,37 г', 'Жири − 23,2 г', 'Вуглеводи − 12,8 г', 'Калорійність − 280 кКал']
		},
		{
			id: 4,
			image: 'block-17.png',
			image1: 'block-17.png',
			image2: 'block-17.png',
			text: 'Фісташковий бісквіт, крем маракуйя з маскарпоне, желе манго-маракуйя, з шматочками банану, свіжої м`яти, мадагаскарської ванілі та лікеру granmarnier. Всередині рідка капсула маракуйя-манго, крем Шанті з м`якоттю кокоса. Вкритий лаймовою глазурью. Основа з кармелізованим кокосом, білим шоколадом і пудрою лайма.',
			name: 'Десерт',
			title: 'PLUM',
			flavor: [],
			weight: [],
			price: 145,
			quantity: 1,
			button: 'Замовити',
			link: 'Детальніше',
			interesting: 'N',
			filterCategory: ['Для чоловіків', 'Для жінок', 'Nuage'],
			categories: 'Десерти',
			category: 'products__category--in-stock',
			backgroundChange: 'products__column--border',
			energyValue: ['Білки − 6,37 г', 'Жири − 23,2 г', 'Вуглеводи − 12,8 г', 'Калорійність − 280 кКал']
		},
		{
			id: 5,
			image: 'block-18.png',
			image1: 'block-18.png',
			image2: 'block-18.png',
			text: 'Фісташковий бісквіт, крем маракуйя з маскарпоне, желе манго-маракуйя, з шматочками банану, свіжої м`яти, мадагаскарської ванілі та лікеру granmarnier. Всередині рідка капсула маракуйя-манго, крем Шанті з м`якоттю кокоса. Вкритий лаймовою глазурью. Основа з кармелізованим кокосом, білим шоколадом і пудрою лайма.',
			name: 'Торт',
			title: 'НОВОРІЧНИЙ',
			flavor: [{
				image: 'smack-1.jpg',
				item: 'Nuage',
			},
			{
				image: 'smack-2.jpg',
				item: 'Альфонсо',
			},
			{
				image: 'smack-3.jpg',
				item: 'Exotic',
			},
			{
				image: 'smack-4.jpg',
				item: 'Ейфорія',
			},
			{
				image: 'smack-5.jpg',
				item: 'Папа Руж',
			},
			{
				image: 'smack-6.jpg',
				item: 'None',
			}],
			weight: ['1 кг', '2 кг', 'Інше'],
			price: 1050,
			quantity: 1,
			button: 'Замовити',
			link: 'Детальніше',
			interesting: 'N',
			filterCategory: ['На новий рік', 'Для жінок', 'Nuage'],
			categories: 'Торти',
			category: 'products__category--to-order',
			backgroundChange: 'products__column--color',
			energyValue: ['Білки − 6,37 г', 'Жири − 23,2 г', 'Вуглеводи − 12,8 г', 'Калорійність − 280 кКал']
		},
		{
			id: 6,
			image: 'block-19.png',
			image1: 'block-19.png',
			image2: 'block-19.png',
			text: 'Фісташковий бісквіт, крем маракуйя з маскарпоне, желе манго-маракуйя, з шматочками банану, свіжої м`яти, мадагаскарської ванілі та лікеру granmarnier. Всередині рідка капсула маракуйя-манго, крем Шанті з м`якоттю кокоса. Вкритий лаймовою глазурью. Основа з кармелізованим кокосом, білим шоколадом і пудрою лайма.',
			name: 'Десерт',
			title: 'ФІСТАШКОВА ЕЙФОРІЯ',
			flavor: [],
			weight: [],
			price: 145,
			quantity: 1,
			button: 'Замовити',
			link: 'Детальніше',
			interesting: 'N',
			filterCategory: ['Для чоловіків', 'Для жінок', 'Nuage'],
			categories: 'Десерти',
			category: 'products__category--in-stock',
			backgroundChange: 'products__column--border',
			energyValue: ['Білки − 6,37 г', 'Жири − 23,2 г', 'Вуглеводи − 12,8 г', 'Калорійність − 280 кКал']
		}
	])
	const [basket, setBasket] = useState([])
	function addBasket(item) {
		const isInArray = basket.some(elem => elem.id === item.id);
		if (!isInArray) {
			setBasket([...basket, item]);
		}
	}
	function removeFromBasket(id) {
		setBasket(basket.filter((basket => basket.id !== id)))
	}
	return (
		<>
			<context.ProductsContext.Provider value={{ products, setProducts }}>
				<context.BasketContext.Provider value={{ basket, setBasket, addBasket }}>
					<Head>
						<title>Create Next App</title>
						<meta name="description" content="Generated by create next app" />
						<meta name="viewport" content="width=device-width, initial-scale=1" />
						<link rel="icon" href="/favicon.ico" />
					</Head>
					<Header basket={basket} removeFromBasket={removeFromBasket} />
					<div className="wrapper">
						{children}
					</div>
					<Footer />
				</context.BasketContext.Provider>
			</context.ProductsContext.Provider>
		</>
	)
}