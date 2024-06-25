

import Image from 'next/image'
import bgImg from '@/public/img/bg_page_instruction.svg'
// import pdf from '@/public/csoft-icons-collection.pdf'
import LinkBack from '@/app/components/LinkBack/LinkBack'


export default function LoadPdf() {
	return (
		<section className='bg_grey'>
			<div className='content_width_large'>
				<Image
					src={bgImg}
					width={400}
					height={337}
					alt='Иконка страницы'
					priority={true}
					className='bg_page_img'
				/>
			</div>

			<div className='content_width_middle'>
				<h1>Загрузить PDF</h1>
				<h2>
					<span>
						Скачайте или распечатайте PDF файл, если это необходимо
					</span>
				</h2>


				<LinkBack />
			</div>

			<div className='content_width_large'>
				{/* <Document file="csoft-icons-collection.pdf" /> */}
				{/* <iframe src="csoft-icons-collection.pdf"></iframe> */}

			</div>
		</section>
	)
}