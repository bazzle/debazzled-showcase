
/** @type { import('@storybook/nextjs-vite').StorybookConfig } */
const config = {
	'stories': [
		'../app/ui/style-library/components/**/*.stories.@(js|jsx|mjs|ts|tsx)',
	],
	'addons': [
		'@chromatic-com/storybook',
		'@storybook/addon-vitest',
		'@storybook/addon-a11y',
		'@storybook/addon-docs',
		'@storybook/addon-onboarding',
		'@storybook/addon-themes',
	],
	'framework': '@storybook/nextjs-vite',
	'staticDirs': [
		'../public',
	],
	viteFinal(config) {
		config.resolve.alias = {
			...config.resolve.alias,
			'next/image': new URL('./next-image-mock.js', import.meta.url).pathname,
		}
		return config
	},
}
export default config
