import { Suspense } from 'react'

async function CurrentYear() {
	const currentYear = new Date().getFullYear()

	return `${currentYear} `
}

const Footer = () => {
	return (
		<footer className='justify-self-center pt-2'>
			<p className='text-sm'>
				&copy;
				<Suspense fallback='Loading...'>
					<CurrentYear />
				</Suspense>
				Restaurant with Next.js. Almost all rights reserved.
			</p>
		</footer>
	)
}

export default Footer
