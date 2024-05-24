'use client'
import { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { getIconsFilteredData } from '@/app/utils/get-data'
// import Gallery from '@/app/components/gallery/gallery'

export default function Search() {
	const searchParams = useSearchParams()
	const [iconsFilteredData, setIconsFilteredData] = useState([])

	useEffect(() => {
		const fetchData = async () => {
			setIconsFilteredData(await getIconsFilteredData(searchParams.get('icons')))
		}
		fetchData()
	}, [searchParams])

	return (
		<section>
			<h1>Поиск</h1>
			<h2>{searchParams.get('icons')}</h2>
			{/* <Gallery /> */}
			<ul>
				{iconsFilteredData.map((item) => {
					return (<li key={item.id}>{item.id}</li>)
				})}
			</ul>
		</section>
	)
}