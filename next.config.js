const withExportImages = require('next-export-optimize-images');

const nextConfig = withExportImages({
    reactStrictMode: true,
    images: {
        deviceSizes: [640, 960, 1280, 1600, 1920],
    },
});

module.exports = nextConfig;
