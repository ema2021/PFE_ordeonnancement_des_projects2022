/** @type {import('next').NextConfig} */
const withPWA = require("next-pwa");
const runtimeCaching = require("next-pwa/cache");

const nextConfig = withPWA({
	reactStrictMode: true,
	pwa: {
		dest: "public",
		register: true,
		skipWaiting: true,
		disable: process.env.NODE_ENV === "development",
	},
	images: {
		domains: ["unsplash.com"],
	},
	experimental: {
		urlImports: ["https://unpkg.com/gojs@2.2.10/release/"],
	},
	i18n: {
		locales: ["fr"],
		defaultLocale: "fr",
	},
});

module.exports = nextConfig;
