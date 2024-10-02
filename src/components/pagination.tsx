import { Link } from 'next-view-transitions'
import { FC } from 'react'

type PaginationProps = {
	totalItem: number
	page: number
	totalPage: number
	pageSize: number
}

const Pagination: FC<PaginationProps> = ({
	page,
	pageSize,
	totalItem,
	totalPage
}) => {
	return (
		<div>
			<div className='flex flex-col items-center'>
				<span className='text-sm text-gray-700 dark:text-gray-400'>
					Showing{' '}
					<span className='font-semibold text-gray-900 dark:text-white'>
						{(page - 1) * pageSize + 1}
					</span>{' '}
					to{' '}
					<span className='font-semibold text-gray-900 dark:text-white'>
						{page * pageSize > totalItem ? totalItem : page * pageSize}
					</span>{' '}
					of{' '}
					<span className='font-semibold text-gray-900 dark:text-white'>
						{totalItem}
					</span>{' '}
					Entries
				</span>
				<div className='xs:mt-0 mt-2 inline-flex'>
					<Link
						href={`?page=${page === 1 ? '1' : page - 1}`}
						className={`${
							page === 1 || page === 0 ? 'pointer-events-none opacity-75' : ''
						} flex h-8 items-center justify-center rounded-s bg-gray-800 px-3 text-sm font-medium text-white hover:bg-gray-900 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white`}>
						<svg
							className='me-2 h-3.5 w-3.5 rtl:rotate-180'
							aria-hidden='true'
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 14 10'>
							<path
								stroke='currentColor'
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth='2'
								d='M13 5H1m0 0 4 4M1 5l4-4'
							/>
						</svg>
						Prev
					</Link>
					<Link
						href={`?page=${page === totalPage ? totalPage : page + 1}`}
						className={`${
							page === totalPage || page === 0 ?
								'pointer-events-none opacity-75'
							:	''
						} flex h-8 items-center justify-center rounded-e border-0 border-s border-gray-700 bg-gray-800 px-3 text-sm font-medium text-white hover:bg-gray-900 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white`}>
						Next
						<svg
							className='ms-2 h-3.5 w-3.5 rtl:rotate-180'
							aria-hidden='true'
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 14 10'>
							<path
								stroke='currentColor'
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth='2'
								d='M1 5h12m0 0L9 1m4 4L9 9'
							/>
						</svg>
					</Link>
				</div>
			</div>
		</div>
	)
}

export default Pagination
