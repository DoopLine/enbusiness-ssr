const sveltePreprocess = require("svelte-preprocess");
module.exports = {
	preprocess: sveltePreprocess({
		scss: {
			includePaths: ["src"]
		},
		postcss: {
			plugins: [
				require("postcss-preset-env")({ stage: 3, autoprefixer: true })
			]
		}
	})
};
