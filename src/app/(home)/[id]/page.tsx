import RestaurantItem from '@/components/restaurant-item'
import getUrl from '@/utils/get-domain'
import { Metadata } from 'next'
import { Link } from 'next-view-transitions'
import { FC } from 'react'
import api from '../../../services/api'

type Props = {
	params: Promise<{ id?: string }>
}
// export const dynamic = 'force-dynamic' // por defecto: auto
export async function generateMetadata({ params }: Props): Promise<Metadata> {
	const { id } = await params
	if (!id) {
		throw new Error('Missing id')
	}
	const restaurant = await api.fetch(id)
	const restaurant_url = getUrl(`/${id}`)

	return {
		// only example data
		title: `${restaurant.name} - Restaurant`,
		description: restaurant.description,
		category: 'restaurant',
		abstract: restaurant.description,
		icons: [restaurant.image],
		keywords: ['restaurant', 'food', 'drink', 'menu', 'reservation'],
		classification: 'restaurant',
		alternates: {
			canonical: restaurant_url,
			languages: {
				en: restaurant_url
			}
		},

		twitter: {
			card: 'summary_large_image',
			title: `${restaurant.name} - Restaurant`,
			description: restaurant.description,
			images: [restaurant.image],

			site: '@site',
			creator: '@creator',
			creatorId: '@creatorId',
			siteId: '@siteId'
		},
		openGraph: {
			images: [restaurant.image]
		}
	}
}

// export async function generateStaticParams() {
// 	const { data } = await api.list({})

// 	return data.map((restaurant) => ({
// 		id: restaurant.id
// 	}))
// }

const Page: FC<Props> = async ({ params }) => {
	const { id } = await params
	if (!id) {
		throw new Error('Missing id')
	}
	const restaurant = await api.fetch(id)

	// Schema.org JSON-LD for SEO
	const jsonLd = {
		'@context': 'https://schema.org',
		'@type': 'Restaurant',
		name: restaurant.name,
		url: getUrl(`/${id}`),
		image: restaurant.image,
		description: restaurant.description,
		address: {
			'@type': 'PostalAddress',
			streetAddress: restaurant.address.streetAddress,
			addressLocality: restaurant.address.addressLocality,
			addressRegion: restaurant.address.addressRegion,
			postalCode: restaurant.address.postalCode,
			addressCountry: restaurant.address.addressCountry
		}
	}
	return (
		<>
			<section>
				<script
					type='application/ld+json'
					dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
				/>
				<Link
					href='/'
					className='hover:underline'>
					Back to home
				</Link>
				<RestaurantItem
					isLink={false}
					key={restaurant.id}
					{...restaurant}
				/>
			</section>
		</>
	)
}

export default Page
