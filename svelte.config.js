const sveltePreprocess = require("svelte-preprocess");
module.exports = {
	preprocess: sveltePreprocess({
		scss: {
			includePaths: ["src"]
		},
		postcss: {
			plugins: [
				require("postcss-preset-env")({
					stage: 2,
					autoprefixer: { flex: "no-2009" }
				}),
				require("doiuse")({
					browsers: ["safari >= 9", " iOS >= 7"],
					ignore: ["rem"],
					onFeatureUsage: function(usageInfo) {
						console.log(usageInfo.message);
					}
				})
			]
		}
	})
};
