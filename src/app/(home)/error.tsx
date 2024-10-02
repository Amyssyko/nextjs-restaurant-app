'use client'

export default function ErrorPage({
	reset
}: {
	error: Error & { digest?: string }
	reset: () => void
}) {
	return (
		<section className='space-y-8 text-center'>
			<h1>No restaurants available.</h1>
			<article>
				<button
					className='hover:underline'
					onClick={() => reset()}>
					Try again
				</button>
			</article>
		</section>
	)
}
