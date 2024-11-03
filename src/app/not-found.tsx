import { Link } from 'next-view-transitions'

export default async function NotFound() {
	return (
		<section className='grid h-full w-full place-content-center justify-items-center space-y-2'>
			<h1>Page Not Found</h1>
			<p>Could not find requested resource</p>
			<p className='pt-8'>
				View <Link href='/'> Home</Link>
			</p>
		</section>
	)
}
