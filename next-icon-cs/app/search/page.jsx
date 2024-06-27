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
			// console.log(searchParams.get('icons'));
			setIconsFilteredData(await getIconsFilteredData(searchParams.get('icons')))
		}
		fetchData()
	}, [searchParams])

	return (
		<section>
			<div className={'content_width_large'}>
				{/* <h3 className='margin_bottom_s'>По запросу <i>{searchParams.get('icons')}</i></h3> */}
				{/* <h4 className='margin_bottom_xl'>Создан {dateModified}</h4> */}
				<h3>{searchParams.get('icons')}</h3>
				<h4>Найдено совпадений: <i>{iconsFilteredData.length}</i></h4>
				{iconsFilteredData.length > 0 &&
					<Gallery arrayData={iconsFilteredData} />
				}
			</div>
		</section>
	)
}