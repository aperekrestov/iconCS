'use client'

import { usePathname } from 'next/navigation'
import Logo from '@/app/components/logo/logo'
import NavLinks from '@/app/components/nav-links/nav-links'
import SearchBar from '@/app/components/search-bar/search-bar'
import styles from './Header.module.scss'

export default function Header() {
	const pathname = usePathname()

	return (
		<header className={styles.header_section}>
			<div className={styles.header_section__container + ' ' + 'content_width_large'}>
				<div className={styles.left_side}>
					<Logo />
				</div>

				{
					pathname !== '/' &&					
					<div className={styles.center_part}>
						<SearchBar />
					</div>
				}

				<div className={styles.right_side}>
					<NavLinks />
				</div>
			</div>
		</header>
	)

}