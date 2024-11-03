import Footer from '@/components/footer'
import Header from '@/components/head'
import type { Metadata } from 'next'
import { ViewTransitions } from 'next-view-transitions'
import localFont from 'next/font/local'
import './globals.css'

const geistSans = localFont({
	src: './fonts/GeistVF.woff',
	variable: '--font-geist-sans',
	weight: '100 900'
})
const geistMono = localFont({
	src: './fonts/GeistMonoVF.woff',
	variable: '--font-geist-mono',
	weight: '100 900'
})

export const metadata: Metadata = {
	title: 'Restaurant with Next.js',
	description: 'A app to display a list of restaurants.'
}

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<ViewTransitions>
			<html lang='en'>
				<body
					className={`grid h-dvh w-full grid-rows-[auto_1fr_auto] ${geistSans.variable} ${geistMono.variable} vsc-initialized antialiased`}>
					<Header title='Restaurant with Next.js' />
					<main className='px-4 md:px-12'>{children}</main>
					<Footer />
				</body>
			</html>
		</ViewTransitions>
	)
}
