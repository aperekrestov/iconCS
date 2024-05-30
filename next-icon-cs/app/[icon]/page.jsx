'use client'
import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import { getIconsApprovedId } from '@/app/utils/get-data'
import dateFormat, { } from 'dateformat'
import LinkBack from '@/app/components/LinkBack/LinkBack'

export default function IconPage() {
	const searchParams = useSearchParams()
	const id = searchParams.get('id')

	const [isIdAvailable, setIsIdAvailable] = useState(false)
	const [iconsApprovedId, setIconsApprovedId] = useState([])
	const [iconMetaDataModified, setIconMetaDataModified] = useState(null)
	const [iconConvertedMetaDataModified, setIconConvertedMetaDataModified] = useState(null)
	// setIconConvertedMetaDataModified('создан ' + dateFormat(iconMetaDataModified, 'dd.mm.yyyy'))

	function setIconData() {
		//? определяем данные 
		if (value.iconsArray.length > 0) {
			for (let i = 0; i < value.iconsArray.length; i++) {
				if (value.iconsArray[i].id === iconId) {
					iconContent = getIconContent(value.iconsArray, iconId)
					setIconUrl(iconContent.imgUrl)
					setIconTitle(iconContent.title)
					setIconTags(getIconTags(iconContent.tags))
					setIconMetaDataModified(fetchHeader(iconContent.imgUrl, 'Last-Modified'))
					setIconConvertedMetaDataModified('создан ' + dateFormat(iconMetaDataModified, 'dd.mm.yyyy'))
					//? проверяем соответствие введенного ID в адресной строке со списками массива иконок
					return
				}
			}
			setIconConvertedMetaDataModified('отсутствует')
		}
	}

	useEffect(() => {
		const fetchIconsApproovedId = async () => {
			setIconsApprovedId(await getIconsApprovedId(id))
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
		<section>
			<div className={'content_width_large'}>
				<LinkBack />
				<h3>ID <i>{id}</i></h3>
				<span className={"font_ultra margin_left_ultra_small"} >{iconConvertedMetaDataModified}</span>
				<h2>{id}</h2>
			</div>
		</section>
	)
}