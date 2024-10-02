import Link from 'next/link'

const Header = ({ title }: { title: string }) => {
	return (
		<header className='text-center'>
			<Link href={'/'}>
				<h1 className='text-2xl font-extrabold'>{title}</h1>
			</Link>
		</header>
	)
}

export default Header
