'use client'
import { useRouter } from 'next/navigation'
import Link from "next/link"
import styles from './link-back.module.scss'

export default function LinkBack() {
	const router = useRouter()

	return (
		<Link
			href=''
			onClick={router.back}
			className={styles.link_back + ' ' + 'font_small'}
		>
			<div className={styles.link_back__icon}>
				<span className={styles.link_back__arrow}></span>
			</div>
			Назад
		</Link>
	)
}