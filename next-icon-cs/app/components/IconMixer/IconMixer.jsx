import { useState, useEffect } from 'react'
import { getIconSvgUrl } from '@/app/utils/get-data'
import {
	GENERAL_EXTENSION, PNG_EXTENSION, SVG_EXTENSION,
	GENERAL_SIZE, SMALL, MEDIUM, LARGE,
	X2_LARGE, X3_LARGE, X4_LARGE, X5_LARGE
} from '@/app/utils/constants'
import styles from './IconMixer.module.scss'

export default function IconMixer({ id }) {
	const [svgData, setSvgData] = useState(null)
	const [size, setSize] = useState(GENERAL_SIZE)
	const [extention, setExtention] = useState(GENERAL_EXTENSION)

	const errorMassege = 'Файл #' + id + ' размером ' + size + 'x' + size + ' не найден'

	function handleClick() {
		if (extention === SVG_EXTENSION) {
			triggerDownload(blobFinalSvg(svgModificator()), id + ".svg");
		} else {
			downloadPNG(id + PNG_EXTENSION)
		}
	}
	const blobFinalSvg = (svg) => {
		const blob = new Blob([svg], { type: "text/plain" })
		return URL.createObjectURL(blob)
	}
	function triggerDownload(fileURI, fileName) {
		let evt = new MouseEvent("click", {
			view: window,
			bubbles: false,
			cancelable: true
		});
		let a = document.createElement("a")
		a.setAttribute("download", fileName)
		a.setAttribute("href", fileURI)
		a.setAttribute("target", '_blank')
		a.dispatchEvent(evt)
	}
	function downloadPNG(fileName) {
		let canvas = document.createElement("canvas")
		canvas.width = size
		canvas.height = size
		let ctx = canvas.getContext("2d")
		ctx.clearRect(0, 0, size, size)
		let DOMURL = window.URL || window.webkitURL || window
		let img = new Image()
		let svgBlob = new Blob([svgModificator()], { type: "image/svg+xml;charset=utf-8" })
		let url = DOMURL.createObjectURL(svgBlob)

		img.onload = function () {
			ctx.drawImage(img, 0, 0)
			DOMURL.revokeObjectURL(url)
			if (typeof navigator !== "undefined" && navigator.msSaveOrOpenBlob) {
				let blob = canvas.msToBlob()
				navigator.msSaveOrOpenBlob(blob, fileName)
			}
			else {
				let imgURI = canvas
					.toDataURL("image/png")
					.replace("image/png", "image/octet-stream")
				triggerDownload(imgURI, fileName)
			}
			// document.removeChild(canvas)
			canvas = null
		};
		img.src = url;
	}


	function handleSizeChange(e) {
		switch (e.target.value) {
			case SMALL:
				setSize(SMALL)
				break
			case MEDIUM:
				setSize(MEDIUM)
				break
			case LARGE:
				setSize(LARGE)
				break
			case X2_LARGE:
				setSize(X2_LARGE)
				break
			case X3_LARGE:
				setSize(X3_LARGE)
				break
			case X4_LARGE:
				setSize(X4_LARGE)
				break
			case X5_LARGE:
				setSize(X5_LARGE)
				break

			default:
				setSize(GENERAL_SIZE)
				break
		}
	}

	function handleExtentionChange(e) {
		e.target.value === PNG_EXTENSION ? setExtention(PNG_EXTENSION) : setExtention(SVG_EXTENSION)
	}

	const svgModificator = () => {
		return svgData.replace(new RegExp(`<svg width="${GENERAL_SIZE}" height="${GENERAL_SIZE}"`, "gi"), `<svg width="${size}" height="${size}"`)
	}
	const iconStyle = (svg) => {
		return {
			width: size + 'px',
			height: size + 'px',
			backgroundImage: "url('data:image/svg+xml; base64," + window.btoa(svg) + "')"
			//? window.btoa кодирует строку в base-64
		}
	}
	const iconContainerStyle = () => {
		return {
			width: size + 'px',
			height: size + 'px'
		}
	}

	useEffect(() => {
		const fetchSvgData = async () => {
			let currentSize = size >= Number(LARGE) ? LARGE : size
			//? по факту не подгружаем иконку крупнее 32x32
			const response = await fetch(getIconSvgUrl(id, currentSize))
			if (response.ok) {
				let responseText = await response.text()
				setSvgData(responseText)
				return
			} else {
				console.error('ОШИБКА', response.status)
			}
		}
		fetchSvgData()
	}, [size])

	return (
		<div>
			<form className='margin_bottom_xl'>
				<h4 className='margin_bottom_m'><b>РАЗМЕР:</b> {size}*{size}</h4>

				<div className={styles.size_radio_btn_container}>
					<div className={styles.size_radio_btn}>
						<input id='radio-1' type='radio' name='radio' value={SMALL} onChange={handleSizeChange} />
						<label className='font_small' htmlFor='radio-1'>{SMALL}</label>
					</div>
					<div className={styles.size_radio_btn}>
						<input id='radio-2' type='radio' name='radio' value={MEDIUM} onChange={handleSizeChange} />
						<label className='font_small' htmlFor='radio-2'>{MEDIUM}</label>
					</div>
					<div className={styles.size_radio_btn}>
						<input id='radio-3' type='radio' name='radio' value={LARGE} defaultChecked onChange={handleSizeChange} />
						<label className='font_small' htmlFor='radio-3'>{LARGE}</label>
					</div>
					<div className={styles.size_radio_btn}>
						<input id='radio-4' type='radio' name='radio' value={X2_LARGE} onChange={handleSizeChange} />
						<label className='font_small' htmlFor='radio-4'>{X2_LARGE}</label>
					</div>
					<div className={styles.size_radio_btn}>
						<input id='radio-5' type='radio' name='radio' value={X3_LARGE} onChange={handleSizeChange} />
						<label className='font_small' htmlFor='radio-5'>{X3_LARGE}</label>
					</div>
					<div className={styles.size_radio_btn}>
						<input id='radio-6' type='radio' name='radio' value={X4_LARGE} onChange={handleSizeChange} />
						<label className='font_small' htmlFor='radio-6'>{X4_LARGE}</label>
					</div>
					<div className={styles.size_radio_btn}>
						<input id='radio-7' type='radio' name='radio' value={X5_LARGE} onChange={handleSizeChange} />
						<label className='font_small' htmlFor='radio-7'>{X5_LARGE}</label>
					</div>
				</div>
			</form>

			<form className='margin_bottom_xxl'>
				<h4 className='margin_bottom_m'><b>файл:</b> {id}{extention}</h4>

				<div className={styles.size_radio_btn_container}>
					<div className={styles.size_radio_btn}>
						<input id='radio-png' type='radio' name='radio' value={PNG_EXTENSION} onChange={handleExtentionChange} />
						<label className='font_small' htmlFor='radio-png'>{PNG_EXTENSION}</label>
					</div>
					<div className={styles.size_radio_btn}>
						<input id='radio-svg' type='radio' name='radio' value={SVG_EXTENSION} defaultChecked onChange={handleExtentionChange} />
						<label className='font_small' htmlFor='radio-svg'>{SVG_EXTENSION}</label>
					</div>
				</div>
			</form>

			<h4 className='margin_bottom_m'>результат:</h4>

			//todo оформить отдельный компонент с результатом миксера
			{svgData
				?
				<>
					<div className={styles.result + ' ' + 'margin_bottom_l'}>
						<div className={styles.result__corners_container}>
							<div className={styles.result__corner_top_left + ' ' + styles.result__corner}></div>
							<div className={styles.result__corner_top_right + ' ' + styles.result__corner}></div>
						</div>
						<div className={styles.result__icon_container} style={iconContainerStyle()}>
							<div style={iconStyle(svgModificator())}></div>
						</div>
						<div className={styles.result__corners_container}>
							<div className={styles.result__corner_bottom_left + ' ' + styles.result__corner}></div>
							<div className={styles.result__corner_bottom_right + ' ' + styles.result__corner}></div>
						</div>
					</div>

					<button className='margin_bottom_xxl' onClick={handleClick} >Загрузить</button>
				</>
				:
				<h4 className='margin_bottom_xl color_red'>{errorMassege}</h4>
			}

		</div>
	)
}