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
						? styles.nav_btn + ' ' + styles.nav_btn__1_active
						: styles.nav_btn + ' ' + styles.nav_btn__1}`
				}
				href='/'
				data-title='ГЛАВНАЯ'
			></Link>

			<Link
				className={
					`Link ${pathname === '/instruction'
						? styles.nav_btn + ' ' + styles.nav_btn__2_active
						: styles.nav_btn + ' ' + styles.nav_btn__2}`
				}
				href='/instruction'
				data-title='ИНСТРУКЦИИ'
			></Link>

			<Link
				className={
					`Link ${pathname === '/legal'
						? styles.nav_btn + ' ' + styles.nav_btn__3_active
						: styles.nav_btn + ' ' + styles.nav_btn__3}`
				}
				href='/legal'
				data-title='СОГЛАШЕНИЕ'
			></Link>

			<Link
				className={
					`Link ${pathname === '/load-pdf'
						? styles.nav_btn + ' ' + styles.nav_btn__4_active
						: styles.nav_btn + ' ' + styles.nav_btn__4}`
				}
				href='/load-pdf'
				data-title='ЗАГРУЗИТЬ PDF'
			></Link>

		</nav>
	)
}