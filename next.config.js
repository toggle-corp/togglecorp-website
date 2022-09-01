const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');

/** @type {import('next').NextConfig} */
const nextConfig = withPlugins([
    [optimizedImages, {
        handleImage: ['png', 'svg'],
        optimizeImages: true,
        optipng: {
            optimizationLevel: 3,
        },
        responsive: {
            resize: true,
            min: 100,
            max: 1600,
            steps: 5,
            adapter: require('responsive-loader/jimp'),
            placeholder: true,
        },
        defaultImageLoader: 'responsive-loader',
    }],
], {
    reactStrictMode: true,
    trailingSlash: true,
    images: {
        disableStaticImages: true
    }
});

module.exports = nextConfig
