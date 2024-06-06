'use client'
import dateFormat, { } from 'dateformat'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import styles from './IconInfo.module.scss'

import { getIconImageUrl } from '@/app/utils/get-data'

export default function IconInfo({ id }) {
	const [dateModified, setDateModified] = useState('')

	async function fetchHeader(url, wch) {
		try {
			let req = new XMLHttpRequest()
			req.open('HEAD', url, false)
			req.send(null)
			if (req.status === 200) {
				return req.getResponseHeader(wch)
			}
			else return false
		} catch (er) {
			return er.message
		}
	}

	useEffect(() => {
		const fetch = async () => {
			let fileMetaData = (await fetchHeader(getIconImageUrl(id), 'Last-Modified'))
			dateMofifyer(await fileMetaData)
		}
		const dateMofifyer = (date) => {
			setDateModified(dateFormat(date, 'dd.mm.yyyy'))
		}
		fetch()
	}, [])

	return (
		<div className={styles.container}>
			<h3 className='margin_bottom_s'>ID <i>{id}</i></h3>
			<h4 className='margin_bottom_xl'>Создан {dateModified}</h4>
			<Image
				src={getIconImageUrl(id)}
				width={32}
				height={32}
				alt={'title'}
				className={styles.icon}
			/>
		</div>
	)
}