'use client'
'use client'

import { FC, useEffect, useState } from 'react'

type FavButtonProps = {
	id: string
}

const FavButton: FC<FavButtonProps> = ({ id }) => {
	const [isFavourite, setIsFavourite] = useState(false)

	const addFavourite = () => {
		let favourites = window.localStorage.getItem('favorites') || ''

		// If exists, remove
		if (favourites.includes(id)) {
			favourites = favourites.replace(id, '').trim()
			window.localStorage.setItem('favorites', favourites)
			setIsFavourite(false) // Update state after removal
			return
		}

		// If not exists, add
		favourites = `${favourites} ${id}`.trim()
		window.localStorage.setItem('favorites', favourites)
		setIsFavourite(true) // Update state after addition
	}

	useEffect(() => {
		const handleStorageChange = (event: StorageEvent) => {
			if (event.key === 'favorites') {
				const isFav = event.newValue?.includes(id) || false
				setIsFavourite(isFav)
			}
		}

		window.addEventListener('storage', handleStorageChange)

		return () => {
			window.removeEventListener('storage', handleStorageChange)
		}
	}, [id])

	useEffect(() => {
		const isFav =
			window.localStorage.getItem('favorites')?.includes(id) || false
		setIsFavourite(isFav)
	}, [id])

	return (
		<button
			type='button'
			onClick={addFavourite}
			className={`text-2xl text-red-500 ${isFavourite ? 'opacity-100' : 'opacity-20'}`}>
			♥
		</button>
	)
}

export default FavButton
