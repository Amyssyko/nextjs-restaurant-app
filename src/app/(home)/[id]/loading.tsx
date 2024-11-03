import RestaurantItem from '@/components/restaurant-item'

const Loading = () => {
	return (
		<section>
			<RestaurantItem
				isLink={false}
				description='Loading...'
				id='0'
				image='Loading...'
				name='Loading...'
				ratings={0}
				score={0}
				address={{
					streetAddress: 'Loading...',
					addressLocality: 'Loading...',
					addressRegion: 'Loading...',
					postalCode: 'Loading...',
					addressCountry: 'Loading...'
				}}
			/>
		</section>
	)
}

export default Loading
