import styles from './icon-result.module.scss'
import { PNG_EXTENSION, SVG_EXTENSION, GENERAL_SIZE } from '@/app/utils/constants'

export default function IconResult({svgData, size, extention, id}) {
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

	return (
		<>
			<div className={styles.result + ' ' + 'margin_bottom_xxl'}>
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

			<button className='margin_bottom_xl' onClick={handleClick} >Загрузить</button>
		</>
	)
}