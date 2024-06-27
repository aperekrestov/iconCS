'use client'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { getIconTags } from '@/app/utils/get-data'
import styles from './TagList.module.scss'

export default function TagList({ id }) {
	const [itemTags, setItemTags] = useState([])

	useEffect(() => {
		const fetchTags = async () => {
			setItemTags(await getIconTags(id))
		}
		fetchTags()
	}, [])

	return (
		<div>
			{itemTags.length > 0 &&
				<>
					<h4 className='margin_bottom_m'><b>теги:</b> {itemTags.length}</h4>
					<div className={styles.tags_container}>
						{itemTags.map((tag) => {
							return (
								<Link href={`/search?icons=${tag}`} key={tag} className={styles.tag}>
									<h4>{tag.toLowerCase()}</h4>
								</Link>
							)
						})}
					</div>
				</>
			}
		</div>
	)
}