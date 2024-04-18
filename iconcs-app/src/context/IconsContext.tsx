import { useEffect, createContext } from "react"
import iconsCollectionData from '@/assets/icons-collection-data.json'


// const setResourse = () => {
// 	//? определяем рабочий массив данных коллекции иконок
// 	const iconsApproved = iconsCollectionData.filter(function (item) {
// 		return item.status === "true"
// 	})
// 	const iconsApprovedWithImgUrl = iconsApproved.map(({ id, title, tags }) => {
// 		// const imgUrl = getIconImageUrl(id)
// 		return {
// 			id,
// 			title,
// 			// imgUrl,
// 			tags
// 		}
// 	})

// 	// setIconsArray(iconsApprovedWithImgUrl)
// }


// useEffect(() => {
// 	if (iconsCollectionData.length > 0) {
// 		setResourse()
// 	} else {
// 		//todo отодразить ошибаку
// 	}
// }, [])

type IconsContextProviderProps = {
	children: React.ReactNode
}

export const IconsContext = createContext(iconsCollectionData)

export const IconsContextProvider = ({children}: IconsContextProviderProps) => {
	return <IconsContext.Provider value={iconsCollectionData}>{children}</IconsContext.Provider>
}