import { createRoot } from 'react-dom/client'
import { App } from './components/App'
import { createBrowserRouter, HashRouter, createHashRouter, RouterProvider } from 'react-router-dom'
import { Instruction } from '@/pages/Instruction'
import { Legal } from '@/pages/Legal'
import { Main } from '@/pages/Main'
import { Suspense } from 'react'


const root = document.getElementById('root')

if (!root) {
	throw new Error('root not found')
}

const container = createRoot(root)

const router = createHashRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{
				path: '/',
				element: <Suspense fallback='Loading...'><Main /></Suspense>
			},
			{
				path: '/instruction',
				element: <Suspense fallback='Loading...'><Instruction /></Suspense>
			},
			{
				path: '/Legal',
				element: <Suspense fallback='Loading...'><Legal /></Suspense>
			},
		]
	},
]);

container.render(
	<RouterProvider router={router} />
)