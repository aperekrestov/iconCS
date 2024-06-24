
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
		<section>
			<div className='content_width_large'>
				<h1>Галерея</h1>
				<p>
					<span className='color_red'>CS</span>oft создает глобальный визуальный язык, который объединяет нас.
					Язык, позволяющий быстро и легко общаться, независимо от того, кто вы и где находитесь.
					Универсальный и доступный инструмент коммуникации в пользовательском интерфейсе,
					пересекающих языковые и культурные границы.
				</p>
				{approvedIcons.length > 0 &&
					<Gallery arrayData={approvedIcons} />
				}
			</div>
		</section>
	)
}