'use client'

import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { Suspense } from 'react'

function Search() {
	const searchParams = useSearchParams()
	const pathname = usePathname()
	const { replace } = useRouter()

	function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
		// Prevenimos que la página se refresque al enviar el formulario
		event.preventDefault()

		const params = new URLSearchParams(searchParams)

		// Obtenemos el valor del input
		const query = event.currentTarget.query.value

		if (query) {
			params.set('query', query)
		}

		if (!query) {
			params.delete('query')
			replace('/')
			return
		}

		if (pathname === '/search') {
			replace(`?${params.toString()}`)
			return
		}

		replace(`/search${pathname}?${params.toString()}`)
		// Redireccionamos al index con una query
		// push(`/?q=${query}`)
	}

	return (
		<header className='grid'>
			<form
				onSubmit={handleSubmit}
				className='mx-auto mb-4 inline-flex rounded-lg border hover:border-sky-600 focus:border-none'>
				{/* Inicializamos el input para que contenga el valor actual de la query */}
				<input
					defaultValue={searchParams.get('query') || ''}
					className='appearance-auto border-sky-600 px-2 caret-yellow-500 hover:appearance-none focus:caret-pink-500 forced-colors:appearance-auto'
					name='query'
				/>
				{searchParams.get('query') && (
					<button
						type='button'
						onClick={() => {
							replace(`/`)
						}}
						className='scale-50 rounded-lg border bg-red-700/80 px-4 text-white delay-100 ease-in-out hover:scale-75'>
						X
					</button>
				)}
				<button
					type='submit'
					className='scale-75 rounded-lg border bg-sky-700/90 p-2 text-white delay-150 ease-in-out hover:scale-90'>
					Search
				</button>
			</form>
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
