import { getIconsApprovedData } from '@/app/utils/get-data'

export default async function Search() {
	const iconsApproved = await getIconsApprovedData()

	return (
		<section>
		
			<h1>Поиск</h1>
			<ul>
				{iconsApproved.map((item) => {
					return (
						<li key={item.id}>
							{item.id}
						</li>

					)
				})}
			</ul>
		</section>
	)
}