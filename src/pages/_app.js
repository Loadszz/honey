// import '@/styles/globals.css'
import '@/styles/app.scss'
import Layout from '@/components/layout/Layout'

export default function App({ Component, pageProps }) {
	return (
		<Layout>
			<Component {...pageProps} />
		</Layout>
	)
}
