'use client'
import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import { getIconsApprovedData, getIconsApprovedId, getIconImageUrl } from '@/app/utils/get-data'

import LinkBack from '@/app/components/LinkBack/LinkBack'
import IconInfo from '@/app/components/IconInfo/IconInfo'

export default function IconPage() {
	const searchParams = useSearchParams()
	const id = searchParams.get('id')
	const [isIdAvailable, setIsIdAvailable] = useState(false)
	
	const [iconUrl, setIconUrl] = useState(null)

	useEffect(() => {
		const fetchIconsApproovedId = async () => {
			checkId(await getIconsApprovedId(id))
		}
		const checkId = (arr) => {
			if (arr.includes(id)) {
				setIsIdAvailable(true)
				setIconUrl(getIconImageUrl(id))
			} else {
				setIsIdAvailable(false)
			}
		}
		fetchIconsApproovedId()
	}, [id])

	return (
		<section className={'bg_grey'}>
			<div className={'content_width_large'}>
				<LinkBack />
				{isIdAvailable 
					?  
						<IconInfo id={id} />
					:
						<p>1</p>
				}

			</div>
		</section>
	)
}