import Image from 'next/image'
import bgImg from '@/public/img/bg_page_legal.svg'
import LinkBack from '@/app/components/link-back/link-back'

export default function Legal() {
	return (
		<article className='bg_grey'>
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
				<h1>Соглашение</h1>
				<h2>
					<span>
					Ознакомьтесь с пользовательским соглашением
					</span>
				</h2>
				<p>Настоящее Пользовательское Соглашение (далее Соглашение) регулирует отношения между Администрацией данного сайта (далее Администрация) с одной стороны и пользователем сайта с другой. Используя сайт, Вы соглашаетесь с условиями данного Соглашения. Если Вы не согласны с условиями данного соглашения, не используйте данный сайт!</p>

				<h3>1. Права и обязанности сторон</h3>
				<dl>
					<dt>Пользователь имеет право:</dt>
					<dd>Получать информацию на сайте</dd>
					<dd>Осуществлять поиск информации на сайте</dd>
					<dd>Копировать информацию сайта на другие сайты с обязательным указанием источника</dd>
					<dd>Копировать информацию сайта на другие сайты с разрешения Администрации сайта</dd>
					<dd>Использовать информацию сайта в личных некоммерческих целях</dd>
					<dd>Использовать информацию сайта в коммерческих целях с разрешения Администрации</dd>
				</dl>
				<dl>
					<dt>Администрация имеет право:</dt>
					<dd>Создавать, изменять, удалять информацию на сайте</dd>
					<dd>Ограничивать доступ к любой информации</dd>
					<dd>По своему усмотрению и необходимости создавать, изменять, отменять правила пользования данным сайтом</dd>
				</dl>
				<dl>
					<dt>Пользователь обязуется:</dt>
					<dd>Не нарушать работоспособность сайта</dd>
					<dd>Не использовать скрипты (программы) для автоматизированного сбора информации и/или взаимодействия с данным сайтом и его сервисами</dd>
				</dl>
				<dl>
					<dt>Администрация обязуется:</dt>
					<dd>Поддерживать работоспособность сайта за исключением случаев, когда это невозможно по независящим от Администрации причинам</dd>
				</dl>

				<h3>2. Ответственность сторон</h3>
				<dl>
					<dd>Администрация не несет ответственность за достоверность информации, скопированной из других источников</dd>
					<dd>Администрация не несёт ответственность за несовпадение ожидаемых пользователем и реально полученных услуг</dd>
					<dd>В случае возникновения форс-мажорной ситуации (боевые действия, чрезвычайное положение, стихийное бедствие и т.д.) Администрация не гарантирует сохранность информации и бесперебойную работу информационного ресурса</dd>
				</dl>

				<p>Данное Соглашение вступает в силу при любом использовании данного сайта. Администрация оставляет за собой право в одностороннем порядке изменять данное соглашение по своему усмотрению путем размещения на сайте новой версии без уведомления пользователя. Продолжение использования сайта пользователем после внесения изменений в настоящее Соглашение означает принятие и согласие пользователя с такими изменениями.</p>

				<LinkBack />
			</div>
		</article>
	)
}