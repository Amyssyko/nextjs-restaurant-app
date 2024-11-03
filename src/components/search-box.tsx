import Form from 'next/form'
import { Suspense } from 'react'
import SearchButton from './search-button'
import SearchInput from './search-input'

function Search() {
	// old method to handle form submission in Next.js 14 and below
	// function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
	// 	// Prevenimos que la página se refresque al enviar el formulario
	// 	event.preventDefault()

	// 	const params = new URLSearchParams(searchParams)

	// 	// Obtenemos el valor del input
	// 	const query = event.currentTarget.query.value

	// 	if (query) {
	// 		params.set('query', query)
	// 	}

	// 	if (!query) {
	// 		params.delete('query')
	// 		replace('/')
	// 		return
	// 	}

	// 	if (pathname === '/search') {
	// 		replace(`?${params.toString()}`)
	// 		return
	// 	}

	// 	replace(`/search${pathname}?${params.toString()}`)
	// 	// Redireccionamos al index con una query
	// 	// push(`/?q=${query}`)
	// }

	return (
		<header className='grid'>
			<Form
				action='/search'
				className='mx-auto mb-4 inline-flex rounded-lg border hover:border-sky-600 focus:border-none'>
				<SearchInput />
				<SearchButton />
			</Form>
		</header>
	)
}

export default function SearchBox() {
	return (
		<Suspense>
			<Search />
		</Suspense>
	)
}
