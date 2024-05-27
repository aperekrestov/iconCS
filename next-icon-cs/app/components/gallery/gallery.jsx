import Link from 'next/link'
import Image from 'next/image'
import styles from './gallery.module.scss'

export default function Gallery({ arrayData }) {

	return (
		<>
			<h3>Галерея</h3>

			<div className={styles.list__container}>
				{
					arrayData.map(({ id, title, imgUrl }) =>
						<Link
							key={id}
							href={`/icon-${id}`}
							data-title={`id ${id}`}
							className={styles.icon_container}
						>
							<Image
								src={imgUrl}
								width={32}
								height={32}
								alt={title}
								className={styles.icon_container__image}
							/>
						</Link>
					)
				}
			</div>

			{/* <ul className={styless.list__container}>
				{
					arrayData.map(({ id, title, imgUrl }) =>
						<li className="icon_container" key={id}>
							<Link href={`/icon-${id}`} data-title={`id ${id}`}>
								<Image
									src={imgUrl}
									width={32}
									height={32}
									alt={title}
									className="icon_container__image"
								/>
							</Link>
						</li>
					)
				}
			</ul> */}

		</>
	)
}