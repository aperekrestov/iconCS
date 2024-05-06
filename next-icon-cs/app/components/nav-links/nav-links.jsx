'use client'

import { usePathname } from "next/navigation"
import Link from "next/link"
import styles from './nav-links.module.scss'

export default function NavLinks() {
	const pathname = usePathname()

	return (
		<nav className={styles.nav_btn_container}>
			<Link className={styles.nav_btn + ' ' + styles.nav_btn__1} href="/"></Link>
			<Link className={styles.nav_btn + ' ' + styles.nav_btn__2} href="/instruction"></Link>
			<Link className={styles.nav_btn + ' ' + styles.nav_btn__3} href="/legal"></Link>
			<Link className={styles.nav_btn + ' ' + styles.nav_btn__4} href="/load-pdf"></Link>
			{/* <Link className={`link ${pathname === '/' ? styles.test : styles.active + ' ' + styles.test}`} href="/">
				Главная
			</Link>

			<Link className={`link ${pathname === '/instruction' ? 'active' : ''}`} href="/instruction">
				Инструкции
			</Link>
			
			<Link className={`link ${pathname === '/legal' ? 'active' : ''}`} href="/legal">
				Соглашение
			</Link>
			
			<Link className={`link ${pathname === '/load-pdf' ? 'active' : ''}`} href="/load-pdf">
				Загрузить PDF
			</Link> */}

		</nav>
	)
}