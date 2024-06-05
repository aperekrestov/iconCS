import {
	GENERAL_EXTENSION, PNG_EXTENSION, SVG_EXTENSION,
	GENERAL_SIZE, SMALL, MEDIUM, LARGE,
	X2_LARGE, X3_LARGE, X4_LARGE, X5_LARGE
} from '@/app/utils/constants'
import styles from './IconMixer.module.scss'

export default function IconMixer({ id }) {

	function handleSizeChange(e) {
		// switch (e.target.value) {
		// 	case SMALL:
		// 		setSize(SMALL)
		// 		break
		// 	case MEDIUM:
		// 		setSize(MEDIUM)
		// 		break
		// 	case LARGE:
		// 		setSize(LARGE)
		// 		break
		// 	case X2_LARGE:
		// 		setSize(X2_LARGE)
		// 		break
		// 	case X3_LARGE:
		// 		setSize(X3_LARGE)
		// 		break
		// 	case X4_LARGE:
		// 		setSize(X4_LARGE)
		// 		break
		// 	case X5_LARGE:
		// 		setSize(X5_LARGE)
		// 		break

		// 	default:
		// 		setSize(GENERAL_SIZE)
		// 		break
		// }
	}

	return (
		<div>
			<h4>РАЗМЕР: <b>32*32</b></h4>

			<form className="margin_bottom_xl">
				<div className="margin_bottom_m">
					<span className="font_ultra">размер:</span>
					{/* <b className={"font_ultra margin_left_ultra_small"}>{newSize + '*' + newSize}</b> */}
				</div>

				<div className={styles.size_radio_btn_container}>
					<div className={styles.size_radio_btn}>
						<input id="radio-1" type="radio" name="radio" value={SMALL} onChange={handleSizeChange} />
						<label className="font_small" htmlFor="radio-1">{SMALL}</label>
					</div>
					<div className={styles.size_radio_btn}>
						<input id="radio-2" type="radio" name="radio" value={MEDIUM} onChange={handleSizeChange} />
						<label className="font_small" htmlFor="radio-2">{MEDIUM}</label>
					</div>
					<div className={styles.size_radio_btn}>
						<input id="radio-3" type="radio" name="radio" value={LARGE} defaultChecked onChange={handleSizeChange} />
						<label className="font_small" htmlFor="radio-3">{LARGE}</label>
					</div>
					<div className={styles.size_radio_btn}>
						<input id="radio-4" type="radio" name="radio" value={X2_LARGE} onChange={handleSizeChange} />
						<label className="font_small" htmlFor="radio-4">{X2_LARGE}</label>
					</div>
					<div className={styles.size_radio_btn}>
						<input id="radio-5" type="radio" name="radio" value={X3_LARGE} onChange={handleSizeChange} />
						<label className="font_small" htmlFor="radio-5">{X3_LARGE}</label>
					</div>
					<div className={styles.size_radio_btn}>
						<input id="radio-6" type="radio" name="radio" value={X4_LARGE} onChange={handleSizeChange} />
						<label className="font_small" htmlFor="radio-6">{X4_LARGE}</label>
					</div>
					<div className={styles.size_radio_btn}>
						<input id="radio-7" type="radio" name="radio" value={X5_LARGE} onChange={handleSizeChange} />
						<label className="font_small" htmlFor="radio-7">{X5_LARGE}</label>
					</div>
				</div>
			</form>
		</div>
	)
}