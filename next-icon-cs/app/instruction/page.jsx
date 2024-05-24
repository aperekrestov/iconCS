import { getData } from '@/app/utils/get-data'

export default async function Instruction() {
	const iconsId = await getData()

	return (
		<article>
			<h1>Игтсрукции</h1>
			{/* <ul>
				{iconsId.map((item) => {
					return (
						<li key={item.id}>
							{item.id}
						</li>

					)
				})}
			</ul> */}
		</article>
	)
}