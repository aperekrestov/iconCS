import React, { Suspense, useEffect, useState } from 'react'
import classes from './App.module.scss'
import { Link, Outlet } from 'react-router-dom'

import { IconsContextProvider } from '@/context/IconsContext'
// import { Box } from '@/context/Box'
import Context from '@/context/context'
// import iconsCollectionData from '@/assets/icons-collection-data.json'
import { getIconImageUrl } from '@/utils/getIconData'

import { readFile } from 'fs'


import { Hat } from '@/components/Hat'

export const App = () => {
	const [count, setCount] = useState<number>(0)
	const [iconsArray, setIconsArray] = useState([])
	const [uniqueTags, setUniqueTags] = useState([])
	const [listID, setListID] = useState([])
	const [scrollTop, setScrollTop] = useState(0)

	// const updateScrollTop = (n) => {
	// 	setScrollTop(n)
	// }

	async function readJsonFile(path: string) {
		// const file = await readFile(path, string 'utf-8');
		// return JSON.parse(file);
	}
	readJsonFile("@/assets/icons-collection-data.json").then((data) => {
		console.log(data);
	});

	const value = {
		iconsArray,
		uniqueTags,
		listID,
		scrollTop,
		// updateScrollTop
	}

	// const setResourse = () => {
	// 	//? определяем рабочий массив данных коллекции иконок
	// 	const iconsApproved = iconsCollectionData.filter(function (item) {
	// 		return item.status === "true"
	// 	})
	// 	const iconsApprovedWithImgUrl = iconsApproved.map(({ id, title, tags }) => {
	// 		const imgUrl = getIconImageUrl(id)
	// 		return {
	// 			id,
	// 			title,
	// 			imgUrl,
	// 			tags
	// 		}
	// 	})

	// 	setIconsArray(iconsApprovedWithImgUrl)
	// }


	// useEffect(() => {
	// 	if (iconsCollectionData.length > 0) {
	// 		setResourse()
	// 	} else {
	// 		//todo отодразить ошибаку
	// 	}
	// }, [])

	return (
		// <Context.Provider value={value.iconsArray}>

		<div>
			{/* {iconsArray.length > 0 && */}
			<>
				<Suspense fallback='Loading...'>
					<Hat />
				</Suspense>


				{/* <img src={iconsArray[0].imgUrl} alt={iconsArray[0].imgUrl} /> */}

				<Outlet />
				{/* <IconsContextProvider>
					<Box />
				</IconsContextProvider> */}
			</>
			{/* } */}
		</div>
		// </Context.Provider>
	)
}