'use client'
import { useEffect, useCallback, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import ScrollToPlugin from 'gsap/ScrollToPlugin'
import styles from './link-top.module.scss'

export default function LinkTop() {
	const [percentage, setPercentage] = useState(0)
	// let isAlpha = false
	gsap.registerPlugin(ScrollToPlugin)

	// const containerAnimation = useRef()
	// //? мы можем передать объект конфигурации в качестве первого параметра, чтобы упростить определение области действия
	// const { contextSafe } = useGSAP({ scope: containerAnimation })

	// const fadeIn = contextSafe(() => {
	// 	gsap.to('.good', {
	// 		opacity: 1, onComplete: () => {
	// 			gsap.to('.good', { pointerEvents: 'painted' })
	// 		}
	// 	})
	// })

	// const fadeOut = contextSafe(() => {
	// 	gsap.to('.good', {
	// 		opacity: 0, onComplete: () => {
	// 			gsap.to('.good', { pointerEvents: 'none' })
	// 		}
	// 	})
	// })

	// function scrollHandler(e) {
	// 	if (e.target.documentElement.scrollTop > 300 && !isAlpha) {
	// 		isAlpha = true
	// 		fadeIn()
	// 	}
	// 	if (e.target.documentElement.scrollTop < 300 && isAlpha) {
	// 		isAlpha = false
	// 		fadeOut()
	// 	}

	// 	let h = document.documentElement,
	// 		b = document.body,
	// 		st = 'scrollTop',
	// 		sh = 'scrollHeight'
	// 	let percent = (h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight) * 100
	// 	setPercentage(Math.round(percent) + '%')
	// 	// if(percent === NaN ){
	// 	// 	console.log('nnnnn');
	// 	// 	setPercentage(0 + '%')
	// 	// }else{
	// 	// 	setPercentage(Math.round(percent) + '%')
	// 	// }
	// }

	function goTop() {
		if (window) {
			gsap.to(window, { duration: 2, scrollTo: { y: 0, x: 0 }, ease: 'power2.inOut' })
		}
	}



	const containerAnimation = useRef()
	const { contextSafe } = useGSAP({ scope: containerAnimation })

	useEffect(() => {
	//? мы можем передать объект конфигурации в качестве первого параметра, чтобы упростить определение области действия
		const fadeIn = contextSafe(() => {
			gsap.to('.good', {
				opacity: 1, onComplete: () => {
					gsap.to('.good', { pointerEvents: 'painted' })
				}
			})
		})
	
		const fadeOut = contextSafe(() => {
			gsap.to('.good', {
				opacity: 0, onComplete: () => {
					gsap.to('.good', { pointerEvents: 'none' })
				}
			})
		})
		let isAlpha = false
		function scrollHandler(e) {
			if (e.target.documentElement.scrollTop > 300 && !isAlpha) {
				isAlpha = true
				fadeIn()
			}
			if (e.target.documentElement.scrollTop < 300 && isAlpha) {
				isAlpha = false
				fadeOut()
			}

			let h = document.documentElement,
				b = document.body,
				st = 'scrollTop',
				sh = 'scrollHeight'
			let percent = (h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight) * 100
			setPercentage(Math.round(percent) + '%')
			// if(percent === NaN ){
			// 	console.log('nnnnn');
			// 	setPercentage(0 + '%')
			// }else{
			// 	setPercentage(Math.round(percent) + '%')
			// }
		}
		console.log('use effect link top');
		window.addEventListener('scroll', scrollHandler)
		return function () {
			document.removeEventListener('scroll', scrollHandler)
		}
	}, [contextSafe]);


	// useEffect(() => {
	// 	// setPercentage(0 + '%')
	// 	console.log('uf');
	// 	window.addEventListener('scroll', scrollHandler)
	// 	return function () {
	// 		document.removeEventListener('scroll', scrollHandler)
	// 	}
	// }, [])

	return (
		<div ref={containerAnimation} className={styles.wrapper_absolute}>
			<div className={'good' + ' ' + styles.link_top} onClick={goTop}>
				<div className={styles.link_top__icon}>
					<span className={styles.link_top__arrow}></span>
				</div>
				<h4 className={styles.progress_value}>
					{percentage}
				</h4>
			</div>
		</div>
	)
}

