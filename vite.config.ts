import react from '@vitejs/plugin-react';
import path from 'node:path';
import { defineConfig, loadEnv } from 'vite';
import svgr from 'vite-plugin-svgr';

const MODE = {
    DEV: 'development',
    PROD: 'production',
};

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, process.cwd(), '');

    const api = env.API_URL ?? 'https://api.unsplash.com';
    console.log(api);
    const generateScopedName = mode === MODE.DEV ? '[folder]--[local]-[hash:base64:5]' : '[local]-[hash:base64:5]';

    return {
        plugins: [react({ babel: { babelrc: true } }), svgr()],
        preview: {
            allowedHosts: true,
        },
        server: {
            host: true,
            port: 5173,
            proxy: {
                '/api': {
                    target: api,
                    changeOrigin: true,
                    rewrite: (path) => path.replace(/^\/api/, '/'),
                },
            },
        },
        resolve: {
            alias: {
                '@': path.resolve(__dirname, './src'),
            },
        },
        css: {
            modules: {
                generateScopedName,
                localsConvention: 'camelCase',
            },
        },
        define: {
            __IS_DEV__: JSON.stringify(mode === MODE.DEV),
        },
    };
});
