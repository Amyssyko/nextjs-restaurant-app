import Pagination from '@/components/pagination'
import RestaurantItem from '@/components/restaurant-item'
import SearchBox from '@/components/search-box'
import Sort from '@/components/sort'

const Loading = () => {
	return (
		<>
			<div className='flex flex-col items-center justify-center gap-x-4 md:flex-row'>
				<SearchBox />
				<Sort />
			</div>
			<div className='flex flex-col items-center justify-between gap-y-4'>
				<section className='grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
					{Array.from({ length: 4 }).map((_, index) => (
						<RestaurantItem
							key={index}
							isLink={false}
							description='Loading...'
							id={`${index}`}
							image='https://via.placeholder.com/200'
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
					))}
				</section>
				<Pagination
					page={0}
					pageSize={0}
					totalItem={0}
					totalPage={0}
				/>
			</div>
		</>
	)
}

export default Loading
