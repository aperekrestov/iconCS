import Link from 'next/link'
import Image from 'next/image'
import styles from './gallery.module.scss'

export default function Gallery({ arrayData }) {
	return (
		<div className={styles.gallery_wrapper}>
			{
				arrayData.map(({ id, title, imgUrl }) =>
					<Link
						key={id}
						href={`/icon?id=${id}`}
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
	)
}