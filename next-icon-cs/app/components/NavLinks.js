'use client'

import { usePathname } from "next/navigation"
import Link from "next/link"

export function NavLinks() {
	const pathname = usePathname()

	return (
		<nav>
			<Link className={`link ${pathname === '/' ? 'active' : ''}`} href="/">
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