import Pagination from '@/components/pagination'
import SearchBox from '@/components/search-box'
import Sort from '@/components/sort'
import RestaurantItem from '../../components/restaurant-item'
import api from '../../services/api'

// export const revalidate = 120

const PAGE_SIZE = '4'

export default async function Home({
	searchParams
}: {
	searchParams: Promise<{ page: string | undefined; sort: string | undefined }>
}) {
	const pageNumber = (await searchParams).page || '1'
	const sortBy = (await searchParams).sort || 'none'

	const { data, pagination } = await api.list({
		page: pageNumber,
		pageSize: PAGE_SIZE,
		sort: sortBy
	})

	return (
		<>
			<div className='flex flex-col items-center justify-center gap-x-4 md:flex-row md:pb-8'>
				<SearchBox />
				<Sort />
			</div>

			<div className='flex flex-col items-center justify-between gap-y-4'>
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
				{data && <Pagination {...pagination} />}
			</div>
		</>
	)
}
