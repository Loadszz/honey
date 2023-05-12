import { useState, useContext } from 'react'
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import 'swiper/scss/thumbs';
import 'swiper/scss/pagination';
// import 'swiper/components/thumbs/thumbs.scss';
import Catalogs from '@/components/Catalogs';
import Info from '@/components/Info';
import Present from '@/components/Present';
import Team from '@/components/Team';
import Social from '@/components/Social';
import History from '@/components/History';
import Banner from '@/components/Banner';
import Products from '@/components/Products';
import MainSlider from '@/components/MainSlider';
import context from '@/contexts/context';

export default function Home() {

	const [sliderProducts, setSliderProducts] = useState([
		{
			id: 1,
			image: 'main-slider-1.png',
			name: 'Кекс',
			title: 'Панетоне три шоколади',
			text: 'Панеттоне — це традиційний італійський кекс, з родзинками, цукатами та хрустким крамблом.Неперевершена делікатна текстура та смак.',
			flavor: [{ name: 'Обрати смак', item: ['Nuage', 'Альфонсо', 'Exotic', 'Ейфорія', 'Папа Руж'] }],
			weight: [{ name: 'Вага', item: ['1 кг', '2 кг', 'Інше'] }],
			price: 830,
			quantity: 1,
			button: 'Замовити',
			link: 'Детальніше',
			popular: 'Y',
			season: 'Y',
			category: 'products__category--to-order',
			backgroundChange: 'products__column--color'
		},
		{
			id: 2,
			image: 'main-slider-2.png',
			name: 'Торт',
			title: 'ROSEMARY',
			text: 'Фісташковий бісквіт, крем маракуйя з маскарпоне, желе манго-маракуйя, з шматочками банану свіжої м`яти, мадагаскарської ванілі та лікеру granmarnier. Всередині рідка капсула маракуйя-манго, крем Шанті з м`якоттю кокоса. Вкритий лаймовою глазурью. Основа з кармелізованим кокосом, білим шоколадом і пудрою лайма.',
			flavor: [],
			weight: [],
			price: 1300,
			quantity: 1,
			button: 'Замовити',
			link: 'Детальніше',
			popular: 'Y',
			season: 'Y',
			category: 'products__category--in-stock',
			backgroundChange: 'products__column--border'
		}
	])
	const { products, setProducts } = useContext(context.ProductsContext)
	const { basket, setBasket, addBasket } = useContext(context.BasketContext)

	return (
		<main>
			<MainSlider sliderProducts={sliderProducts} addBasket={addBasket} />
			<Catalogs />
			<Products products={products} addBasket={addBasket} />
			<Info />
			<Present />
			<Team />
			<History />
			<Banner />
			<Social />
		</main>
	)
}
