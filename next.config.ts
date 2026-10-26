import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	experimental: {
		agentFeedback: true,
	},
	cacheComponents: true,
	partialPrefetching: true,
	turbopack: {
		rules: {
			"*.svg": {
				loaders: ["@svgr/webpack"],
				as: "*.js",
			},
		},
	},
	webpack(config) {
		const imageRule = config.module.rules.find((rule: { test?: RegExp }) =>
			rule?.test?.test?.("image.svg"),
		);

		if (imageRule) {
			imageRule.exclude = /\.svg$/i;
		}

		config.module.rules.push({
			test: /\.svg$/i,
			use: ["@svgr/webpack"],
		});

		return config;
	},
};

export default nextConfig;
