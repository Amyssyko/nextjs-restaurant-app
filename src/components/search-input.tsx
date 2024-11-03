'use client'

import { useRouter, useSearchParams } from 'next/navigation'

export default function SearchInput() {
	const searchParams = useSearchParams()
	const { replace } = useRouter()

	return (
		<div className='relative flex items-center justify-center'>
			<input
				className='appearance-auto border-sky-600 px-2 caret-yellow-500 hover:appearance-none focus:caret-pink-500 forced-colors:appearance-auto'
				defaultValue={searchParams.get('query') || ''}
				name='query'
				placeholder='Search for restaurants'
			/>

			{searchParams.get('query') && (
				<button
					className='animate-in fade-in zoom-in-75 focus-visible:border-ring focus-visible:ring-ring/30 absolute inset-y-px end-px flex h-full w-9 items-center justify-center rounded-e-lg border border-transparent text-red-600/55 ring-offset-background transition-shadow hover:text-red-700 focus-visible:text-red-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50'
					aria-label='Clear input'
					type='button'
					onClick={() => {
						replace('/')
					}}>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						width='16'
						height='16'
						viewBox='0 0 24 24'
						fill='none'
						stroke='currentColor'
						strokeWidth='2'
						strokeLinecap='round'
						strokeLinejoin='round'
						aria-hidden='true'>
						<circle
							cx='12'
							cy='12'
							r='10'></circle>
						<path d='m15 9-6 6'></path>
						<path d='m9 9 6 6'></path>
					</svg>
				</button>
			)}
		</div>
	)
}
