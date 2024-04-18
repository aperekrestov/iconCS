import styles from './Banner.module.scss'

import Search from '../Search'

const Banner = () => {
	return (
		<div className={styles.banner}>
			<h1>Иконки графических интерфейсов <span>CS</span>oft</h1>

			<div className={styles.searchContainer}>
				<Search searchText={""} />
			</div>
		</div>
	)
}

export default Banner