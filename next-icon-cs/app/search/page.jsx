'use client'
import { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { getIconsFilteredData} from '@/app/utils/get-data'

export default function Search() {
	const searchParams = useSearchParams()
	const [iconsFilteredData, setIconsFilteredData] = useState([])

	useEffect(() => {
		const userQuery = searchParams.get('icons')
		const fetchData = async () => {
			setIconsFilteredData(await getIconsFilteredData(userQuery))
		}
		fetchData()
	}, [])

	return (
		<section>
			<h1>Поиск</h1>
			<h2>{searchParams.get('icons')}</h2>
		</section>
	)
}