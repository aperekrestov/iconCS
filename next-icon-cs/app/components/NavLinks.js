'use client'

import { usePathname } from "next/navigation"
import Link from "next/link"

import variables from '@/app/styles/variables.module.scss'

export function NavLinks() {
	const pathname = usePathname()

	return (
		<nav>
			<Link style={{ color: variables.primaryColor }} className={`link ${pathname === '/' ? 'active' : ''}`} href="/">
				Главная
			</Link>

			<Link className={`link ${pathname === '/instruction' ? 'active' : ''}`} href="/instruction">
				Инструкции
			</Link>
			
			<Link className={`link ${pathname === '/legal' ? 'active' : ''}`} href="/legal">
				Соглашение
			</Link>
			
			<Link className={`link ${pathname === '/load-pdf' ? 'active' : ''}`} href="/load-pdf">
				Загрузить PDF
			</Link>
		</nav>
	)
}