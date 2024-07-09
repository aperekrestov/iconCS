'use client'
import { useState, useEffect, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import { getIconsApprovedId } from '@/app/utils/get-data'
import LinkBack from '@/app/components/link-back/link-back'
import IconInfo from '@/app/components/icon-info/icon-info'
import TagList from '@/app/components/tag-list/tag-list'
import IconMixer from '@/app/components/icon-mixer/icon-mixer'
import styles from './icon.module.scss'

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

	if (!isIdAvailable) {
		return (
			<>
				<h3 className='margin_bottom_s'>ID <i>{s}</i></h3>
				<h4 className='margin_bottom_xl'>Не существует</h4>
			</>
		)
	} else {
		return (
			<div className={styles.flex_container}>
				<div className={styles.width_third}>
					<IconInfoSearchParam />
				</div>
				<div className={styles.container_mixer}>
					<IconMixerSearchParam />
					<TagListSearchParam />
				</div>
			</div>
		)
	}
}

export default function IconPage() {
	return (
		<section className='bg_grey'>
			<div className={styles.wrapper + ' ' + 'content_width_middle'}>
				<LinkBack />

				<Suspense>
					<IsIdAvailableSearchParam />
				</Suspense>

			</div>
		</section>
	)

}