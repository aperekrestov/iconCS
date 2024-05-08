'use client'
import { useRef } from 'react'
import styles from './search.module.scss'

export default function Search({ searchText = '' }) {
	const userQuery = useRef(null)

	return (
		<form className={styles.searchForm} autoComplete='off'>
			<input
				autoComplete='off'
				type='search'
				name='search'
				placeholder='Поиск графических иконок'
				defaultValue={searchText}
				className={styles.searchForm__input}
				ref={userQuery}
			// onKeyDown={searchKeyDown}
			/>
			<button className={styles.searchForm__btn} type='submit'></button>


			<select className={styles.searchOptions} id="icons" name="icons" size="5">
				<option value="volvo">Volvo</option>
				<option value="saab">Saab</option>
				<option value="fiat">Fiat</option>
				<option value="audi">Audi</option>
			</select>

		</form>
	)
}