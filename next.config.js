const nextConfig = {
    async headers() {
        return [
            {
                source: '/api/:path*',
                headers: [
                    { key: 'Access-Control-Allow-Origin', value: 'https://firmas.lovable.app' },
                    { key: 'Access-Control-Allow-Methods', value: 'POST, OPTIONS' },
                    { key: 'Access-Control-Allow-Headers', value: 'Content-Type' },
                ],
            },
        ];
    },
};

module.exports = nextConfig;
