import ReactDOM from 'react-dom/client'

import App from './App'

// ReactDom.render(<App />, document.getElementById('root'))
const root = ReactDOM.createRoot(document.getElementById('root'))

function Main() {
	return (
		<App />
	)
}

root.render(
	<Main />
)

const devMode = process.env.NODE_ENV === 'development'

if(devMode && module && module.hot) {
	module.hot.accept()
}