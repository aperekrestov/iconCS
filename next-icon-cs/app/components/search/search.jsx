'use client'

import styles from './search.module.scss'

export default function Search() {
	return (
		<form className={styles.searchForm} autoComplete='off'>
			<input
				type='search'
				name='search'
				placeholder='Поиск графических иконок'
				defaultValue='{searchText}'
				className={styles.searchForm__input}
				// ref={userQuery}
				// onKeyDown={searchKeyDown}
			/>
			<input
				type='submit'
				value=""
				className={styles.searchForm__btn}
			/>
		</form>
	)
}