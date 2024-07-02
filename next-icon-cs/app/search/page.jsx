'use client'
import { Suspense, useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
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
	return <h4>Число совпадений: <i>{iconFilteredData.length}</i></h4>
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
	return <Gallery arrayData={iconFilteredData} />
}

export default function Search() {
	return (
		<section>
			<div className='content_width_large'>
				<Suspense>
					<HeaderSearchParam />
					<MatchesSearchParam />
					<section>
						<GallerySearchParam />
					</section>
				</Suspense>
			</div>
		</section>
	)
}