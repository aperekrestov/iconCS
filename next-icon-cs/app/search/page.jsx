'use client'
import { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { getIconsFilteredData } from '@/app/utils/get-data'

export default function Search() {
	// const userQuery = searchParams.get('icons')
	const searchParams = useSearchParams()
	// const [userQuery, setUserQuery] = useState('')
	const [iconsFilteredData, setIconsFilteredData] = useState([])

	useEffect(() => {
		const fetchData = async () => {
			setIconsFilteredData(await getIconsFilteredData(searchParams.get('icons')))
		}
		fetchData()
	}, [])

	return (
		<section>
			<h1>Поиск</h1>
			<h2>{searchParams.get('icons')}</h2>
			<ul>
				{iconsFilteredData.map((item) => {
					return (<li key={item.id}>{item.id}</li>)
				})}
			</ul>
		</section>
	)
}