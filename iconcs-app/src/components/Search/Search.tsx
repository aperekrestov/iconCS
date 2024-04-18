import { useRef, useState } from 'react'
import styles from './Search.module.scss'

const Search = ({searchText = ''}) => {
	
	// const value = useContext(Context)

	const userQuery = useRef(null)
	const coincidenceList = useRef(null)
	const [coincidence, setCoincidence] = useState([])

	let coincidenceTabIndex = -1
	let inputValue = ''

	const handleFocuseout = (event: React.FocusEvent<HTMLFormElement, Element>) => {
		if (!event.currentTarget.contains(event.relatedTarget)) {
			setCoincidence([])
		}
	}

	const handleChange = () => {}
	const handleSubmit = () => {}
	const searchKeyDown = () => {}
	const clickCoincidence = () => {}

	return (
		<form autoComplete='off' onChange={handleChange} onSubmit={handleSubmit} onBlur={handleFocuseout} className={styles.search}>
			<input
				type='search'
				name='search'
				placeholder="Поиск более 5 сотен иконок"
				defaultValue={searchText}
				className={styles.search__input}
				ref={userQuery}
				onKeyDown={searchKeyDown}
			/>
			<input
				type='submit'
				value=""
				className={styles.search__btn}
			/>

			{coincidence && coincidence.length !== 0 &&
				<ul
					ref={coincidenceList}
					className={styles.search_options}
				>
					{coincidence.map((item, index) =>
						<li
							onClick={clickCoincidence}
							onKeyDown={searchKeyDown}
							key={index}
							tabIndex={index}
						>
							{item}
						</li>
					)}
				</ul>
			}
		</form>
	)
}

export default Search