import '../app/ui/style-library/global/main.scss'
import { withThemeByDataAttribute } from '@storybook/addon-themes'

/** @type { import('@storybook/nextjs-vite').Preview } */
const preview = {
	parameters: {
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
		a11y: {
			test: 'todo',
		},
	},
	decorators: [
		withThemeByDataAttribute({
			themes: {
				dark: 'dark',
				light: 'light',
			},
			defaultTheme: 'dark',
			attributeName: 'data-theme',
		}),
	],
}

export default preview
