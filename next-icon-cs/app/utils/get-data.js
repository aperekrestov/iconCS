import { HOST, FOLDER, SVG_EXTENSION, GENERAL_SIZE } from '@/app/utils/constants'

export async function getData() {
	try {
		const res = await fetch(`${HOST}csoft-icons-collection.json`)
		if (!res.ok) {
			console.error('Нет ответа. ', res.status)
			return false
		}
		return res.json()

	} catch (error) {
		console.error('Ошибка передачи данных. ', res.status)
		return false
	}
}

export async function getIconsApprovedData() {
	//? определяем рабочий массив данных коллекции иконок
	const iconsData = await getData()
	const iconsApproved = iconsData.filter(function (item) {
		return item.status === "true"
	})
	const iconsApprovedWithImgUrl = iconsApproved.map(({ id, title, tags }) => {
		const imgUrl = getIconImageUrl(id)
		return {
			id,
			title,
			imgUrl,
			tags
		}
	})
	return iconsApprovedWithImgUrl
}

export async function getIconsApprovedId() {
	const iconsApprovedData = await getIconsApprovedData()
	const iconsApprovedId = iconsApprovedData.map(item => { 
		return item.id 
	})
	return iconsApprovedId
}

export async function getUniqueTags() {
	//? определяем массив уникальных тегов для подсказки в поисковой строке
	const iconsApprovedData = await getIconsApprovedData()
	const iconArrayTags = iconsApprovedData.map(item => item.tags.toLowerCase())
	const iconArrayTagsJoin = iconArrayTags.join(', ')
	const iconArrayTagsSplit = iconArrayTagsJoin.split(', ')
	const uniqueTagsSet = new Set(iconArrayTagsSplit)
	return ([...uniqueTagsSet])
}

export async function getIconsFilteredData(param) {
	console.log(param)
	// let arrAfterSearch = []	
	// if (value.iconsArray.length > 0) {
	// 	//? отображения списка иконок по ТЭГАМ
	// 	arrAfterSearch = value.iconsArray.filter(function (item) {
	// 		return item.tags.toLowerCase().includes(userQuery.toLowerCase())
	// 	})
	// 	//? отображения списка иконок по ID
	// 	if (arrAfterSearch.length === 0) {
	// 		arrAfterSearch = value.iconsArray.filter(function (item) {
	// 			return item.id.includes(userQuery)
	// 		})
	// 	}
	// }
	return 'flag'
}




export const getIconImageUrl = id => FOLDER + GENERAL_SIZE + "x" + GENERAL_SIZE + "/" + id + SVG_EXTENSION

// export const getIconSvgUrl = (id, size) => FOLDER + size + "x" + size + "/" + id + SVG_EXTENSION

// export const getIconTags = string => { return string.split(", ") }

// export const getIconContent = (iconArray, id) => {
// 	return iconArray.find(item => item.id === id)
// }