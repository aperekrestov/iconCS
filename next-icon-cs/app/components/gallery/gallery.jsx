// 'use client'
// import Link from 'next/link'

// import Image from 'next/image'
// import { getIconsFilteredData } from '@/app/utils/get-data'
// import styles from './gallery.module.scss'

// import { useSearchParams } from 'next/navigation'
// import { useEffect, useState } from 'react'

// function SParam() {
// 	const [arr, setArr] = useState([])
// 	const searchParams = useSearchParams()
// 	// return searchParams.get('icons')
// 	// const fetch = async () => {
// 	// 	return getIconsFilteredData(searchParams.get('icons'))
// 	// }
// 	// // const obj = await fetch()
// 	// const obj = async () => {
// 	// 	await fetch()
// 	// }

// 	// console.log(await obj());
// 	// .then(response => arr = response)
// 	// .then(return(arr))
// 	// console.log(fetch().then(response));

// 	// arrayData.map(({ id, title, imgUrl }) =>
// 	// 	<Link
// 	// 		key={id}
// 	// 		href={`/icon?id=${id}`}
// 	// 		data-title={`id ${id}`}
// 	// 		className={styles.icon_container}
// 	// 	>
// 	// 		<Image
// 	// 			src={imgUrl}
// 	// 			width={32}
// 	// 			height={32}
// 	// 			alt={title}
// 	// 			className={styles.icon_container__image}
// 	// 		/>
// 	// 	</Link>

// 	// return await fetch()
// 	useEffect(() => {
// 		const fetch = async () => {
// 			return getIconsFilteredData(searchParams.get('icons'))
// 		}
// 		// const obj = await fetch()
// 		const obj = async () => {
// 			await setArr(fetch()
// 		}
// 		// const fetchData = async () => {
// 		// 	// console.log(searchParams.get('icons'));
// 		// 	setIconsFilteredData(await getIconsFilteredData(searchParams.get('icons')))
// 		// }
// 		// fetchData()
// 	}, [])
// }

// export default function Gallery() {
// 	// const arrayData = getIconsFilteredData(searchParam)
// 	// console.log(searchParam);

// 	return (
// 		<div className={styles.gallery_wrapper}>
// 			<SParam />
// 			{/* {getIconsFilteredData(searchParam)} */}
// 			{/* {
// 				arrayData.map(({ id, title, imgUrl }) =>
// 					<Link
// 						key={id}
// 						href={`/icon?id=${id}`}
// 						data-title={`id ${id}`}
// 						className={styles.icon_container}
// 					>
// 						<Image
// 							src={imgUrl}
// 							width={32}
// 							height={32}
// 							alt={title}
// 							className={styles.icon_container__image}
// 						/>
// 					</Link>
// 				)
// 			} */}
// 		</div>

// 	)
// }


import Link from 'next/link'
import Image from 'next/image'
import styles from './gallery.module.scss'

export default function Gallery({ arrayData }) {

	return (
		<div className={styles.gallery_wrapper}>
			{
				arrayData.map(({ id, title, imgUrl }) =>
					<Link
						key={id}
						href={`/icon?id=${id}`}
						data-title={`id ${id}`}
						className={styles.icon_container}
					>
						<Image
							src={imgUrl}
							width={32}
							height={32}
							alt={title}
							className={styles.icon_container__image}
						/>
					</Link>
				)
			}
		</div>

	)
}