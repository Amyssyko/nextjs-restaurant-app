import { Link } from 'next-view-transitions'
import { FC } from 'react'
import { Restaurant } from '../type'
import FavButton from './fav-button'

const RestaurantItem: FC<Restaurant & { isLink?: boolean }> = ({
	description,
	id,
	image,
	name,
	ratings,
	score,
	isLink = true
}) => {
	return (
		<article key={id}>
			{isLink ?
				<Link href={`/${id}`}>
					<img
						loading='lazy'
						alt={name}
						className='aspect-auto h-[400px] w-full rounded-md object-cover'
						src={image}
					/>
				</Link>
			: name === 'Loading...' ?
				<div className='mb-3 aspect-auto h-[400px] w-[400px] animate-pulse rounded-md bg-gray-200'></div>
			:	<img
					loading='lazy'
					alt={name}
					className='mb-3 aspect-auto h-[400px] w-full rounded-md object-cover'
					src={image}
				/>
			}

			<div className='flex items-center justify-center gap-1 md:justify-start'>
				<h2 className='text-lg font-bold'>
					{isLink ?
						<Link
							href={`/${id}`}
							className='hover:underline'>
							{name}
						</Link>
					:	<>{name}</>}
				</h2>

				<span className='text-yellow-500'>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						className='size-6'
						viewBox='0 0 20 20'
						fill='currentColor'>
						<path
							fillRule='evenodd'
							d='M10 0c-2.761 0-5 2.239-5 5 0 2.761 5 10 5 10s5-7.239 5-10c0-2.761-2.239-5-5-5zm0 7a2 2 0 100-4 2 2 0 000 4z'
							clipRule='evenodd'
						/>
					</svg>
				</span>
				<span>{score}</span>
				<span className='font-normal opacity-75'>({ratings})</span>
				<FavButton id={id} />
			</div>
			<p className='text-pretty opacity-90'>{description}</p>
		</article>
	)
}

export default RestaurantItem
