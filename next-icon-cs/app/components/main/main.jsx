import SearchBar from '@/app/components/search-bar/search-bar'
import styles from './main.module.scss'

export default function Main() {
	return (
		<section className={styles.wrapper}>
			<div className={styles.container + ' ' + 'content_width_large'}>
				<h1 className={styles.header}>Визуальный язык <span className='color_red'>CS</span>oft</h1>
				<div className={styles.container__search + ' ' + 'margin_bottom_xxl'}>
					<SearchBar />
				</div>
				<div className={styles.banner}>
					<div className={styles.banner__line_1}>
						<div className={styles.banner__icon + ' ' + styles.icon1}></div>
						<div className={styles.banner__icon + ' ' + styles.icon2}></div>
						<div className={styles.banner__icon + ' ' + styles.icon3}></div>
						<div className={styles.banner__icon + ' ' + styles.icon4}></div>
						<div className={styles.banner__icon + ' ' + styles.icon5}></div>
						<div className={styles.banner__icon + ' ' + styles.icon6}></div>
					</div>
					<div className={styles.banner__line_2}>
						<div className={styles.banner__icon + ' ' + styles.icon7}></div>
						<div className={styles.banner__icon + ' ' + styles.icon8}></div>
						<div className={styles.banner__icon + ' ' + styles.icon9}></div>
						<div className={styles.banner__icon + ' ' + styles.icon10}></div>
						<div className={styles.banner__icon + ' ' + styles.icon11}></div>
						<div className={styles.banner__icon + ' ' + styles.icon12}></div>
					</div>
				</div>
			</div>
		</section>
	)
}