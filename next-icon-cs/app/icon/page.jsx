'use client'
import { useState, useEffect, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import { getIconsApprovedId } from '@/app/utils/get-data'

import LinkBack from '@/app/components/LinkBack/LinkBack'
import IconInfo from '@/app/components/IconInfo/IconInfo'
import TagList from '@/app/components/TagList/TagLit'
import IconMixer from '@/app/components/IconMixer/IconMixer'

function IconInfoSearchParam() {
	const sp = useSearchParams()
	const s = sp.get('id')
	return <IconInfo id={s} />
}

function IconMixerSearchParam() {
	const sp = useSearchParams()
	const s = sp.get('id')
	return <IconMixer id={s} />
}

function TagListSearchParam() {
	const sp = useSearchParams()
	const s = sp.get('id')
	return <TagList id={s} />
}

function IsIdAvailableSearchParam() {
	const sp = useSearchParams()
	const s = sp.get('id')
	const [isIdAvailable, setIsIdAvailable] = useState(true)
	useEffect(() => {
		const fetchIconsApproovedId = async () => {
			checkId(await getIconsApprovedId(s))
		}
		const checkId = (arr) => {
			if (arr.includes(s)) {
				setIsIdAvailable(true)
			} else {
				setIsIdAvailable(false)
			}
		}
		fetchIconsApproovedId()
	}, [s])
	console.log(isIdAvailable);

	if (!isIdAvailable) {
		return (
			<>
				<h3 className='margin_bottom_s'>ID <i>{s}</i></h3>
				<h4 className='margin_bottom_xl'>Не существует</h4>
			</>
		)
	} else {
		return (
			<div className='flex_container'>
				<div className='width_third'>
					<IconInfoSearchParam />
				</div>
				<div>
					<IconMixerSearchParam />
					<TagListSearchParam />
				</div>
			</div>
		)
	}
	// return <p>{s}</p>
	// return <TagList id={s} />
}

export default function IconPage() {
	return (
		<section className='bg_grey'>
			<div className='content_width_middle'>
				<LinkBack />

				<Suspense>
					<IsIdAvailableSearchParam />

					{/* <div className='flex_container'>
						<div className='width_third'>
							<IconInfoSearchParam />
						</div>
						<div>
							<IconMixerSearchParam />
							<TagListSearchParam />
						</div>
					</div> */}
				</Suspense>

			</div>
		</section>
	)

}

// export default function IconPage() {
// 	const searchParams = useSearchParams()
// 	const id = searchParams.get('id')
// 	const [isIdAvailable, setIsIdAvailable] = useState(true)

// 	useEffect(() => {
// 		const fetchIconsApproovedId = async () => {
// 			checkId(await getIconsApprovedId(id))
// 		}
// 		const checkId = (arr) => {
// 			if (arr.includes(id)) {
// 				setIsIdAvailable(true)
// 			} else {
// 				setIsIdAvailable(false)
// 			}
// 		}
// 		fetchIconsApproovedId()
// 	}, [id])

// 	return (
// 		<Suspense>

// 			<section className='bg_grey'>
// 				<div className='content_width_middle'>
// 					<LinkBack />
// 					{isIdAvailable
// 						?
// 						<div className='flex_container'>
// 							<div className='width_third'>
// 								<IconInfo id={id} />
// 							</div>
// 							<div>
// 								<IconMixer id={id} />
// 								<TagList id={id} />
// 							</div>
// 						</div>
// 						:
// 						<div>
// 							<h3 className='margin_bottom_s'>ID <i>{id}</i></h3>
// 							<h4 className='margin_bottom_xl'>Не существует</h4>
// 						</div>
// 					}

// 				</div>
// 			</section>
// 		</Suspense>
// 	)
// }