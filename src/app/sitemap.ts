import { MetadataRoute } from 'next'

type Route = {
	url: string
	lastModified: string
}

const baseUrl =
	process.env.NEXT_PUBLIC_VERCEL_URL ?
		`https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
	:	'http://localhost:3000'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
	const routesMap: Route[] = [''].map((route) => ({
		url: `${baseUrl}${route}`,
		lastModified: new Date().toISOString()
	}))

	return routesMap
}
