import RestaurantItem from '@/components/restaurant-item'
import SearchBox from '@/components/search-box'
import api from '@/services/api'

const Page = async ({
	searchParams
}: {
	searchParams: Promise<{ query: string }>
}) => {
	const query = (await searchParams).query
	const data = await api.search(query)
	return (
		<>
			<SearchBox />
			<section className='grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
				{data.length ?
					data.map((restaurant) => (
						<RestaurantItem
							key={restaurant.id}
							{...restaurant}
						/>
					))
				:	<p className='col-span-full text-center'>No restaurant found</p>}
			</section>
		</>
	)
}

export default Page
