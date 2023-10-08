/** @type {import('next').NextConfig} */

const nextConfig = {
    output: 'export',

    images: {
        unoptimized: true,
        // loader: "custom",
    },

    webpack(config) {
        config.resolve.fallback = {
            ...config.resolve.fallback,
            fs: false,
        };

        return config;
    },

    basePath: '/portfolio',
}

module.exports = nextConfig
