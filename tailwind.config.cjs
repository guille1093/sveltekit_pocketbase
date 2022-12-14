const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {}
	},

	plugins: [require('daisyui'), require('@tailwindcss/forms')]
};

module.exports = config;
