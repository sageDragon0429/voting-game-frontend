const dev = process.env.NODE_ENV !== 'production'
module.exports = {
    env: {
        API_URL: dev ? 'http://localhost:3001' : 'https://pacific-hollows-93032.herokuapp.com',
        ALCHEMY_API_URL : "https://polygon-mumbai.g.alchemy.com/v2/VAaFI0iV-2W98yxBXPCtG9-OD1MCWIho",
        PRIVATE_KEY : "b3bd71adb864913dd69fb8649e21b97c2193c6431206165de5f9e7a21d931ea0",
        ADMIN_ADDRESS : "0x80e3fa88C8668E24Ee1b08C32b257BB5fB571A46"
    },
    trailingSlash: true,
    eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
    },
    swcMinify: false,
};