
import Logo from '@/app/components/logo/logo'
import NavLinks from '@/app/components/nav-links/nav-links'
import SearchBar from '@/app/components/search-bar/search-bar'
import styles from './header.module.scss'

export default function Header({ searchBarHidden }) {

	return (
		<header className={styles.header_section}>
			<div className={styles.header_section__container + ' ' + 'content_width_large'}>
				<div className={styles.left_side}>
					<Logo />
				</div>
				{!searchBarHidden &&
					<div className={styles.center_part}>
						<Search />
					</div>
				}
				<div className={styles.right_side}>
					<NavLinks />
				</div>
			</div>
		</header>
	)

}