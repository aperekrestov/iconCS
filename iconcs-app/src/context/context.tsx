import { createContext } from 'react'

const Context = createContext({
	iconsArray: [],
	uniqueTags: '',
	listID: '',
	scrollTop: 0, 
	updateScrollTop: 0
})
export default Context