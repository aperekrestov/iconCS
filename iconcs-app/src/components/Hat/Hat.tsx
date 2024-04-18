import { NavLink } from 'react-router-dom'
import Search from '../Search'
import styles from './Hat.module.scss'
import logo from '@/assets/img/logo-light.svg'


const Hat = () => {
	
	return (
		<header>
			{/* <div className={cn(styles.container, "content_width_large content_indent test")}> */}
			<div className={styles.container + ' ' + styles.content_indent}>

				<div className={styles.logo_container}>
					<NavLink to='/'>
						<img src={logo} alt="IconCS логотип" />
					</NavLink>
				</div>

				{/* <div className={styles.searchContainer}>
					<Search />
				</div> */}

				<nav>
					<ul className={styles.list__btn}>
						<li>
							<NavLink to='/' className={styles.list__btn_1} data-title="ГЛАВНАЯ"></NavLink>
						</li>
						<li>
							<NavLink to='/instruction' className={styles.list__btn_2} data-title="ИНСТРУКЦИИ"></NavLink>
						</li>
						<li>
							<NavLink to="/legal" className={styles.list__btn_3} data-title="СОГЛАШЕНИЕ"></NavLink>
						</li>
						<li>
							<a href="csoft-icons-collection.pdf" target="_blank" className={styles.list__btn_4} data-title="ЗАГРУЗИТЬ"></a>
						</li>
					</ul>
				</nav>

			</div>

		</header>
	)
}

export default Hat