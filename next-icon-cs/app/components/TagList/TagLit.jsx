'use client'
import Link from 'next/link'
import { Suspense, useEffect, useState } from 'react'
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
				<div className={styles.tags_container}>
					{itemTags.map((tag) => {
						return (
							<Link href={`/search?icons=${tag}`} key={tag} className={styles.tag + ' ' + 'font_ultra'}>{tag.toLowerCase()}</Link>
						)
					})}
				</div>
			}
		</div>

		// <ul className={styles.tags_list}>
		// 		{iconTags.map(tag => 
		// 			<li key={tag} className={cn("font_ultra", styles.tag)}>
		// 				<NavLink to={`/search=${tag}`}>{tag}</NavLink>
		// 			</li>
		// 		)}
		// 	</ul>
	)
}