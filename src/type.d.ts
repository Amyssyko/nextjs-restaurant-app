export type Restaurant = {
	id: string
	name: string
	image: string
	description: string
	address: {
		streetAddress: string
		addressLocality: string
		addressRegion: string
		postalCode: string
		addressCountry: string
	}
	score: number
	ratings: number
}
