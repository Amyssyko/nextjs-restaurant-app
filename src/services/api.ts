import { Restaurant } from '../type'

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

const api = {
	list: async (
		{
			page = 'none',
			pageSize = 'all',
			sort = 'none'
		}: {
			page?: string
			pageSize?: string
			sort?: string
		} = { page: '1', pageSize: 'all', sort: 'none' }
	): Promise<{
		data: Restaurant[]
		pagination: {
			totalItem: number
			page: number
			totalPage: number
			pageSize: number
		}
	}> => {
		'use server'

		await sleep(750)

		const { CSV_URL } = process.env
		if (!CSV_URL)
			return {
				data: [],
				pagination: { totalItem: 0, page: 1, totalPage: 1, pageSize: 0 }
			}
		const [, ...data] = await fetch(CSV_URL)
			.then((res) => res.text())
			// .then((text) => text.replace(/"/g, ''))
			.then((text) => text.split('\n'))

		const formattedData = data.map((row) => {
			const [
				id,
				name,
				description,
				streetAddress,
				addressLocality,
				addressRegion,
				postalCode,
				addressCountry,
				score,
				ratings,
				image
			] = row.split(',')

			return {
				id: id.replace(/"/g, ''),
				name,
				description,
				address: {
					streetAddress,
					addressLocality,
					addressRegion,
					postalCode,
					addressCountry
				},
				score: parseFloat(score),
				ratings: parseInt(ratings),
				image: image.replace(/"/g, '')
			}
		})

		const sortedData = formattedData.toSorted((a, b) => {
			if (sort === 'asc') {
				return a.score - b.score
			}

			if (sort === 'desc') {
				return b.score - a.score
			}

			return 0
		})

		if (pageSize === 'all') {
			return {
				data: sortedData,
				pagination: {
					totalItem: sortedData.length,
					totalPage: 1,
					page: 1,
					pageSize: sortedData.length
				}
			}
		}

		const start = (parseInt(page) - 1) * parseInt(pageSize)
		const end = start + parseInt(pageSize)

		const paginatedData = sortedData.slice(start, end)
		return {
			data: paginatedData,
			pagination: {
				totalItem: sortedData.length,
				totalPage: Math.ceil(sortedData.length / parseInt(pageSize)),
				page: parseInt(page),
				pageSize: paginatedData.length
			}
		}
	},
	fetch: async (id: Restaurant['id']): Promise<Restaurant> => {
		'use server'

		await sleep(750)

		// const restaurant = restaurants.find((restaurant) => restaurant.id === id)
		const { data } = await api.list()

		const restaurant = data.find((restaurant) => restaurant.id === id)

		if (!restaurant) {
			throw new Error(`Restaurant with id ${id} not found`)
		}

		return restaurant
	},

	search: async (query: string): Promise<Restaurant[]> => {
		'use server'

		// Obtenemos los restaurantes
		const { data: results } = await api.list()
		// Filtramos los restaurantes

		if (!query) {
			// Si no hay query, retornamos todos los restaurantes
			return results
		}

		const data = results.filter((restaurant) => {
			// Si el nombre del restaurante incluye la query
			if (
				restaurant.name.toLocaleLowerCase().includes(query.toLocaleLowerCase())
			) {
				// Lo retornamos
				return restaurant
			}
		})
		if (data.length > 0) {
			// Si hay resultados, los retornamos
			return data
		}

		if (data.length === 0) {
			// Si no hay resultados, retornamos un array vacío
			return []
		}

		return []
		// Los retornamos si
	}
}

export default api
