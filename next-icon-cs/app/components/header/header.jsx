
import Logo from '@/app/components/logo/logo'
import NavLinks from '@/app/components/nav-links/nav-links'
import Search from '@/app/components/search/search'
import { Suspense } from 'react'
import styles from './header.module.scss'

export default function Header() {
	return (
		<header className={styles.header_section}>
			<div className={styles.header_section__container + ' ' + 'content_width_large'}>
				<div className={styles.left_side}>
					<Logo />
				</div>
				<div className={styles.center_part}>
					<Suspense fallback={<>...</>}>
						<Search />
					</Suspense>
				</div>
				<div className={styles.right_side}>
					<NavLinks />
				</div>
			</div>
		</header>
	)

}