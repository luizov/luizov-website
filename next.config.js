module.exports = {
	reactStrictMode: false,
	images: {
		domains: ['avatars.githubusercontent.com']
	},
	webpack: (config, { isServer }) => {
		if (isServer) {
			require('./scripts/generate-sitemap'); // eslint-disable-line
		}

		return config;
	}
}
