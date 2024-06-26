'use client'
import { useEffect, useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'

import { getIconsFilteredData } from '@/app/utils/get-data'
import Gallery from '@/app/components/gallery/gallery'

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
			<div className={'content_width_large'}>
				<h3>{searchParams.get('icons')}</h3>
				<p>Найдено файлов: <i>{iconsFilteredData.length}</i></p>
				{iconsFilteredData.length > 0 &&
					<Gallery arrayData={iconsFilteredData} />
				}
			</div>
		</section>
	)
}