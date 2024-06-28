'use client'
import { Suspense, useEffect, useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'

import { getIconsFilteredData } from '@/app/utils/get-data'
import Gallery from '@/app/components/gallery/gallery'


function HeaderSearchParam() {
	const sp = useSearchParams()
	const s = sp.get('icons')
	return <h3>{s}</h3>
}

function MatchesSearchParam() {
	const sp = useSearchParams()
	const s = sp.get('icons')
	const [iconFilteredData, setIconFilteredData] = useState([])

	useEffect(() => {
		const fetch = async () => {
			setIconFilteredData(await getIconsFilteredData(s))
		}
		fetch()
	}, [s])
	return <h4>Найдено совпадений: <i>{iconFilteredData.length}</i></h4>
}

function GallerySearchParam() {
	const sp = useSearchParams()
	const s = sp.get('icons')
	const [iconFilteredData, setIconFilteredData] = useState([])

	useEffect(() => {
		const fetch = async () => {
			setIconFilteredData(await getIconsFilteredData(s))
		}
		fetch()
	}, [s])
	return <Gallery arrayData={iconFilteredData}/>
} 

export default function Search() {
	return (
		<section>
			<div className='content_width_large'>
				<Suspense>
					<HeaderSearchParam />
					<MatchesSearchParam />
					<GallerySearchParam />
				</Suspense>
			</div>
		</section>
	)
}


// export default function Search() {
// 	const searchParams = useSearchParams()
// 	const [iconsFilteredData, setIconsFilteredData] = useState([])

// 	useEffect(() => {
// 		const fetchData = async () => {
// 			// console.log(searchParams.get('icons'));
// 			setIconsFilteredData(await getIconsFilteredData(searchParams.get('icons')))
// 		}
// 		fetchData()
// 	}, [searchParams])

// 	return (
// 			<section>
// 				<div className={'content_width_large'}>
// 					<h3>{searchParams.get('icons')}</h3>
// 					<h4>Найдено совпадений: <i>{iconsFilteredData.length}</i></h4>
// 					{iconsFilteredData.length > 0 &&
// 						<Gallery arrayData={iconsFilteredData} />
// 					}
// 				</div>
// 			</section> 
// 	)
// }