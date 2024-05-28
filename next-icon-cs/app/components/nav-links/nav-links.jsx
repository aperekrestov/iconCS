'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import styles from './nav-links.module.scss'

export default function NavLinks() {
	const pathname = usePathname()

	return (
		<nav className={styles.nav_btn_container}>
			<Link
				className={
					`Link ${pathname === '/'
						? styles.nav_btn + ' ' + styles.nav_btn__home_active
						: styles.nav_btn + ' ' + styles.nav_btn__home}`
				}
				href='/'
				data-title='ГЛАВНАЯ'
			></Link>

			<Link
				className={
					`Link ${pathname === '/gallery'
						? styles.nav_btn + ' ' + styles.nav_btn__gallery_active
						: styles.nav_btn + ' ' + styles.nav_btn__gallery}`
				}
				href='/gallery'
				data-title='ГАЛЕРЕЯ'
			></Link>

			<Link
				className={
					`Link ${pathname === '/instruction'
						? styles.nav_btn + ' ' + styles.nav_btn__instructions_active
						: styles.nav_btn + ' ' + styles.nav_btn__instructions}`
				}
				href='/instruction'
				data-title='ИНСТРУКЦИИ'
			></Link>

			<Link
				className={
					`Link ${pathname === '/legal'
						? styles.nav_btn + ' ' + styles.nav_btn__legal_active
						: styles.nav_btn + ' ' + styles.nav_btn__legal}`
				}
				href='/legal'
				data-title='СОГЛАШЕНИЕ'
			></Link>

			<Link
				className={
					`Link ${pathname === '/load-pdf'
						? styles.nav_btn + ' ' + styles.nav_btn__pdf_active
						: styles.nav_btn + ' ' + styles.nav_btn__pdf}`
				}
				href='/load-pdf'
				data-title='PDF'
			></Link>

		</nav>
	)
}