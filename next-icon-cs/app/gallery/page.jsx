
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
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam cum dolorum explicabo laboriosam repudiandae dolor nulla nisi tenetur nesciunt nam eum, ipsa, aspernatur minima animi labore! Eligendi sint officia facilis.</p>
				{approvedIcons.length > 0 &&
					<Gallery arrayData={approvedIcons} />
				}
			</div>
		</section>
	)
}