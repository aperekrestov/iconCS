import Image from 'next/image'

export default function LoadPdf() {

	return (
		<div>
			<div className='content_width_large banner_top'>
				<h1>Рабочий PDF</h1>
				<p>
					Ниже представлен рабочий PDF файл, содержащий коллекцию старых иконок,
					на основе которых был согласован и разработан новый сет значков
					для пользовательских интерфейсов продуктов
					группы копнаий <span className='color_red font_bold'>CS</span>oft.
				</p>
				<form action="/csoft-icons-collection.pdf" target='_blank' method="get">
					<button className='margin_bottom_xl button_darck'>Получить PDF</button>
				</form>
			</div>
			<div className='banner_top_tail bg_grey'>
				<div className='banner_top_tail__arrow'></div>
			</div>


			<div className='wrapper_preview_collection'>


				<Image
					priority='true'
					src='/img/preview_collection/icons-a.svg'
					width={1920}
					height={1080}
					alt='Предпросмотр коллекции'
					className='img_pdf'
				/>
				<Image
					priority='true'
					src='/img/preview_collection/icons-b.svg'
					width={1920}
					height={1080}
					alt='Предпросмотр коллекции'
					className='img_pdf'
				/>
				<Image
					priority='true'
					src='/img/preview_collection/icons-c.svg'
					width={1920}
					height={1080}
					alt='Предпросмотр коллекции'
					className='img_pdf'
				/>
				<Image
					priority='true'
					src='/img/preview_collection/icons-d.svg'
					width={1920}
					height={1080}
					alt='Предпросмотр коллекции'
					className='img_pdf'
				/>
				<Image
					priority='true'
					src='/img/preview_collection/icons-e.svg'
					width={1920}
					height={1080}
					alt='Предпросмотр коллекции'
					className='img_pdf'
				/>
				<Image
					priority='true'
					src='/img/preview_collection/icons-f.svg'
					width={1920}
					height={1080}
					alt='Предпросмотр коллекции'
					className='img_pdf'
				/>
			</div>

		</div>
	)
}