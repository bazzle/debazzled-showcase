import '@/app/assets/styles/main.scss'
import Footer from '@/app/ui/project/modules/Footer'
import AppThemeProvider from '@/app/context/ThemeProvider'

export const metadata = {
	title: 'Debazzled — Design System',
	description:
		'My personal design system',
}

export default function RootLayout({ children }) {
	return (
		<html lang="en" data-scroll-behaviour="smooth" suppressHydrationWarning>
			<head>
				<link
					rel="preconnect"
					href="https://use.typekit.net"
					crossOrigin="anonymous"
				/>
				<link
					rel="stylesheet"
					href="https://use.typekit.net/sqp3jyo.css"
				></link>
			</head>
			<body className="body">
				<AppThemeProvider>
					{children}
					<Footer />
				</AppThemeProvider>
			</body>
		</html>
	)
}
