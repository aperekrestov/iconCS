import Link from 'next/link'
import styless from './footer.module.scss'

export default function Footer() {
	return (
		<footer
			className={styless.wrapper}>

			<Link
				className={styless.copyright}
				href='https://www.csoft.ru/'
				target='_blank'
			>
				© CSoft
			</Link>
		</footer>
	)
}