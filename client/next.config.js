/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	styledComponents: true,
	swcMinify: true,
	images: {
		unoptimized: true,
	},
};

module.exports = nextConfig;
