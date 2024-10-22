import Pagination from '@/components/pagination'
import RestaurantItem from '@/components/restaurant-item'
import SearchBox from '@/components/search-box'
import Sort from '@/components/sort'
import api from '@/services/api'

const PAGE_SIZE = process.env.NEXT_PUBLIC_PAGE_SIZE || '4'

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
		<div className='grid h-full grid-rows-[auto_1fr_auto]'>
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
			</div>
			<>{data && <Pagination {...pagination} />}</>
		</div>
	)
}
