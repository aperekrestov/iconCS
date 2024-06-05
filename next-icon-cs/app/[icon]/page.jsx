'use client'
import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import { getIconsApprovedId } from '@/app/utils/get-data'

import LinkBack from '@/app/components/LinkBack/LinkBack'
import IconInfo from '@/app/components/IconInfo/IconInfo'
import TagList from '../components/TagList/TagLit'

export default function IconPage() {
	const searchParams = useSearchParams()
	const id = searchParams.get('id')
	const [isIdAvailable, setIsIdAvailable] = useState(true)

	useEffect(() => {
		const fetchIconsApproovedId = async () => {
			checkId(await getIconsApprovedId(id))
		}
		const checkId = (arr) => {
			if (arr.includes(id)) {
				setIsIdAvailable(true)
			} else {
				setIsIdAvailable(false)
			}
		}
		fetchIconsApproovedId()
	}, [id])

	return (
		<section className={'bg_grey'}>
			<div className={'content_width_middle'}>
				<LinkBack />
				{isIdAvailable
					?
					<div className='flex_container'>
						<div className='width_third'>
							<IconInfo id={id} />
						</div>
						<TagList id={id} />
					</div>
					:
					<div>
						<h3>ID <i>{id}</i></h3>
						<span className={'font_ultra'}>Не существует</span>
					</div>
				}

			</div>
		</section>
	)
}