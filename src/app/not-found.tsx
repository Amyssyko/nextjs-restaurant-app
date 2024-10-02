import { Link } from 'next-view-transitions'
import { headers } from 'next/headers'

export default async function NotFound() {
	const headersList = await headers()
	const referer = headersList.get('referer')

	return (
		<section className='grid h-full w-full place-content-center justify-items-center space-y-2'>
			<h1>Page Not Found</h1>
			<h2> Referer : {referer?.split('/').pop()}</h2>
			<p>Could not find requested resource</p>
			<p className='pt-8'>
				View <Link href='/'> Home</Link>
			</p>
		</section>
	)
}
