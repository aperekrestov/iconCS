export async function getData() {
	const res = await fetch('http://localhost:3000/csoft-icons-collection.json')
	return res.json()
}

export function getTest() {
	return 'тест'
}