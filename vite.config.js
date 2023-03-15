import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
    plugins: [
        function myFunc(){
            console.log('Hello world');
        },
        laravel({
            input: [
                'resources/scss/theme.scss', 
                'resources/scss/user.scss', 
                'resources/js/config.js',
            ],
            refresh: true,
        }),
    ],
    build: {
        rollupOptions: {
            input: {
                config: './resources/js/config.js'
            },
        },
    },
});
