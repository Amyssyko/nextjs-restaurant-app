'use client'
import { useFormStatus } from 'react-dom'

export default function SearchButton() {
	const status = useFormStatus()
	return (
		<button
			className='scale-75 rounded-lg border bg-sky-700/90 px-3 py-2 text-white ease-in-out hover:scale-90'
			type='submit'>
			{status.pending ? 'search...' : 'search'}
		</button>
	)
}
