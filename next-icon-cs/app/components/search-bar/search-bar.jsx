'use client'

import { useRouter } from 'next/navigation'
import { usePathname } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
import { getData, getIconsApprovedId, getUniqueTags } from '@/app/utils/get-data'
import styles from './search-bar.module.scss'

export default function SearchBar({ searchText = '' }) {
	const [iconsApprovedId, setIconsApprovedId] = useState([])
	const [iconsUniqueTags, setIconsUniqueTags] = useState([])
	const [coincidence, setCoincidence] = useState([])

	const router = useRouter()
	const pathname = usePathname()
	const coincidenceList = useRef(null)
	const userQuery = useRef(null)

	let coincidenceTabIndex = -1
	let inputValue = ''

	const handleFocuseout = (e) => {
		if (!e.currentTarget.contains(e.relatedTarget)) {
			setCoincidence([])
		}
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		goToUserQueryPage()
	}

	const clickCoincidence = (e) => {
		userQuery.current.value = e.target.textContent
		goToUserQueryPage()
	}

	const goToUserQueryPage = () => {
		// todo window.scrollTo(0, 0)
		// todo проверка пробеды в запросе запроса

		if (userQuery.current.value !== '') {
			setCoincidence([])
			router.replace(`/search?icons=${userQuery.current.value}`, { scroll: true })
		}
	}

	const handleChange = (e) => {
		inputValue = e.target.value
		setCoincidence(getOptions)
		if (inputValue === '') {
			setCoincidence([])
		}
	}

	function getOptions() {
		// let regex = new RegExp('^' + inputValue, 'gi')
		// //? задаем список подсказок из массива ТЭГОВ
		// let coincidencesFullArray = iconsUniqueTags.filter(item => { return item.match(regex) })
		// if (coincidencesFullArray.length === 0) {
		// 	coincidencesFullArray = iconsApprovedId.filter(item => { return item.match(regex) })
		// }
		// return coincidencesFullArray.slice(0, 5)
	}

	const searchKeyDown = (e) => {
		if (e.keyCode === 40) {
			e.preventDefault()
			coincidenceTabIndex === coincidenceList.current.children.length - 1 ? coincidenceTabIndex = 0 : coincidenceTabIndex++
			optionPrewNext()
		}
		if (e.keyCode === 38) {
			e.preventDefault()
			coincidenceTabIndex <= 0 ? coincidenceTabIndex = coincidenceList.current.children.length - 1 : coincidenceTabIndex--
			optionPrewNext()
		}
		if (e.keyCode === 13) {
			goToUserQueryPage()
		}
	}

	function optionPrewNext() {
		if (coincidence.length > 0) {
			coincidenceList.current.children[coincidenceTabIndex].focus()
			userQuery.current.value = coincidenceList.current.children[coincidenceTabIndex].innerHTML
		}
	}

	useEffect(() => {
		const fetchData = async () => {
			// setIconsUniqueTags(await getUniqueTags())
			// setIconsApprovedId(await getIconsApprovedId())
			const data = await getData()
			// console.log(router.locale)
			
		}

		fetchData()
	}, [])

	useEffect(() => {
		userQuery.current.value = ''
	}, [pathname])

	return (
		<form
			onChange={handleChange}
			onSubmit={handleSubmit}
			onBlur={handleFocuseout}
			className={styles.searchForm}
			autoComplete='off'
		>
			<input
				autoComplete='off'
				type='search'
				name='search'
				placeholder='Начать поиск'
				defaultValue={searchText}
				className={styles.searchForm__input}
				ref={userQuery}
				onKeyDown={searchKeyDown}
			/>
			<button className={styles.searchForm__btn} type='submit'></button>

			<ul className={styles.searchOptions} ref={coincidenceList}>
				{/* {coincidence.map((item, index) => {
					return (
						<li
							onClick={clickCoincidence}
							onKeyDown={searchKeyDown}
							// tabIndex={coincidenceTabIndex}
							tabIndex={index}
							key={index}
						>
							{item}
						</li>

					)
				})} */}
			</ul>



			{/* <ul className={styles.searchOptions} ref={coincidenceList}>
				{data.map((item, index) => {
					return(

						<li
						// onClick={clickCoincidence}
						onKeyDown={searchKeyDown}
						key={item.id}
						// tabIndex={index}
						>
						{item}
					</li>
						)
				}
				)}
			</ul> */}


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