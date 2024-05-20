import SearchBar from '@/app/components/search-bar/search-bar'
import styles from './main.module.scss'

export default function Main() {
	return (
		<section className={styles.wrapper}>
			<div className={styles.container + ' ' + 'content_width_large'}>
				<h1>Визуальный язык позволяет общаться независимо от того, кто вы и где вы</h1>
				<div className={styles.container__search}>
					<SearchBar />
				</div>
			</div>
		</section>
	)
}