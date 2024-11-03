import type { NextConfig } from 'next'
const cspHeader = `
    script-src 'self' 'unsafe-eval' 'unsafe-inline';
    style-src 'self' 'unsafe-inline';
    font-src 'self';
    object-src 'none';
    base-uri 'self';
    form-action 'self';
    frame-ancestors 'none';
    upgrade-insecure-requests;
`
const nextConfig: NextConfig = {
	async headers() {
		return [
			{
				source: '/(.*)',
				headers: [
					{
						key: 'Content-Security-Policy',
						value: cspHeader.replace(/\n/g, '')
					},
					{
						key: 'Access-Control-Allow-Origin',
						value: '*' // Set your origin
					},
					{
						key: 'Access-Control-Allow-Methods',
						value: 'GET'
					}
				]
			}
		]
	},

	experimental: {
		dynamicIO: false
	}
}

export default nextConfig
