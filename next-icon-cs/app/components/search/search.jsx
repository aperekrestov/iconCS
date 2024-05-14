'use client'
import { Suspense, useEffect, useRef, useState } from 'react'
import { getData, getTest } from '@/app/utils/get-data'
import styles from './search.module.scss'



export default function Search({ searchText = '' }) {
	const userQuery = useRef(null)
	const coincidenceList = useRef(null)

	let coincidenceTabIndex = -1
	let coincidence = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

	const searchKeyDown = (e) => {
		if (e.keyCode === 40) {
			e.preventDefault()
			console.log('вниз ' + coincidenceList.current.children.length);
			coincidenceTabIndex === coincidenceList.current.children.length - 1 ? coincidenceTabIndex = 0 : coincidenceTabIndex++
			coincidenceList.current.children[coincidenceTabIndex].focus()
			userQuery.current.value = coincidenceList.current.children[coincidenceTabIndex].innerHTML
		}
		if (e.keyCode === 38) {
			e.preventDefault()
			console.log('вверх');
			coincidenceTabIndex <= 0 ? coincidenceTabIndex = coincidenceList.current.children.length - 1 : coincidenceTabIndex--
			coincidenceList.current.children[coincidenceTabIndex].focus()
			userQuery.current.value = coincidenceList.current.children[coincidenceTabIndex].innerHTML
		}
		if (e.keyCode === 13) {
			console.log('ентер');
			// goToUserQueryPage()
		}
	}

	useEffect(() => {
		const fetchData = async () => {
			try {
				const iconsId = await getData()
				console.log(iconsId);
				// const result = await getData(perPage, page);
				// setData(result);
			} catch (error) {
				console.error('Error fetching data:', error);
			}
		};

		fetchData();
	}, [])

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
				onKeyDown={searchKeyDown}
			/>
			<button className={styles.searchForm__btn} type='submit'></button>


			<ul className={styles.searchOptions} ref={coincidenceList}>
				{coincidence.map((item, index) =>
					<li
						// onClick={clickCoincidence}
						onKeyDown={searchKeyDown}
						key={index}
						tabIndex={index}
					>
						{item}
					</li>
				)}
			</ul>


			{/* <select
				 onMouseDown={toggleClass}
				className={styles.searchOptions}
				id="icons"
				name="icons"
				size="5"
				// defaultValue='saab'
				ref={coincidenceList}
			>
				<option value="volvo" className={isActive ? styles.ttt : ''}>Volvo</option>
				<option value="saab">Saab</option>
				<option value="fiat">Fiat</option>
				<option value="audi">Audi</option>
			</select> */}
		</form>
	)
}