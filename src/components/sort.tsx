'use client'

import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { Suspense } from 'react'

const SortClient = () => {
	const searchParams = useSearchParams()
	const pathname = usePathname()
	const { replace } = useRouter()
	function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
		// Prevenimos que la página se refresque al enviar el formulario
		event.preventDefault()

		const params = new URLSearchParams(searchParams)

		const value = event.currentTarget.querySelector('select')?.value

		if (value) {
			params.set('sort', value)
		}

		if (!value) {
			params.delete('sort')
			replace('/')
			return
		}

		replace(`${pathname}?${params.toString()}`)
	}

	return (
		<form
			onChange={handleSubmit}
			className='mb-4'>
			<label
				htmlFor='countries_disabled'
				className='sr-only mb-2 block text-sm font-medium text-slate-900 dark:text-white'>
				Select an option
			</label>
			<select
				defaultValue={searchParams.get('sort') || ''}
				id='countries_disabled'
				className='block w-full rounded-lg border border-slate-300 bg-slate-50 p-2.5 text-sm text-slate-900 focus:border-blue-500 focus:ring-blue-500 dark:border-slate-800 dark:bg-slate-800 dark:text-white dark:placeholder-slate-400 dark:focus:border-blue-500 dark:focus:ring-blue-500'>
				<option value='none'>None</option>
				<option value='asc'>Ascending</option>
				<option value='desc'>Descending</option>
			</select>
		</form>
	)
}

function Sort() {
	return (
		<Suspense>
			<SortClient />
		</Suspense>
	)
}

export default Sort
