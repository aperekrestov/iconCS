
'use client'
import { useEffect, useState } from "react"
import { getIconsApprovedData } from "@/app/utils/get-data"
import Gallery from "@/app/components/gallery/gallery"

export default function GalleryPage() {
	const [approvedIcons, setApprovedIcons] = useState([])

	useEffect(() => {
		const fetchData = async () => {
			setApprovedIcons(await getIconsApprovedData())
		}
		fetchData()
	}, [])

	return (
		<div>
			<div className='content_width_large banner_top'>
				<h1>Галерея</h1>
				<p>
					<span className='color_red font_bold'>CS</span>oft создает глобальный визуальный язык, который объединяет нас.
					Язык, позволяющий быстро и легко общаться, независимо от того, кто вы и где находитесь.
					Универсальный и доступный инструмент коммуникации в пользовательском интерфейсе,
					пересекающий языковые и культурные границы.
				</p>
			</div>
			<div className='banner_top_tail'>
				<div className='banner_top_tail__arrow'></div>
			</div>

			<section>
				<div className='content_width_large'>
					{approvedIcons.length > 0 &&
						<Gallery arrayData={approvedIcons} />
					}
				</div>
			</section>
		</div>
	)
}