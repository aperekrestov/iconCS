import { Ubuntu } from "next/font/google"
import Header from '@/app/components/Header/Header'
import Footer from '@/app/components/Footer/Footer'

//? импортирнруем глобальные стили в корневой шаблон
import stylesGlobal from '@/styles/styles-global.scss'

const inter = Ubuntu({
	weight: ['300', '400', '500', '700'],
	style: ['normal', 'italic'],
	subsets: ['cyrillic', 'latin'],
	display: 'swap',
});

export const metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<div className={'wrapper_main'}>
					{/* <Header /> */}
					{children}
					{/* <Footer/> */}
				</div>
			</body>
		</html>
	);
}
