import { useContext } from "react"
import { IconsContext } from './IconsContext'

export const Box = () => {
	const theme = useContext(IconsContext)
	console.log(theme);
	
	// return <div style={{backgroundColor: theme.primary.main}}>Theme context</div>
	return (
		<div>
			<h3>
				Theme context
			</h3>
			{theme[0].tags}

		</div>
	)
}