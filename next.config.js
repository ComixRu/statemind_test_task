const removeImports = require('next-remove-imports')();

/** @type {import('next').NextConfig} */
const nextConfig = removeImports({
    env: {
        API_URL: 'https://statemind.io'
    }
})

module.exports = nextConfig
