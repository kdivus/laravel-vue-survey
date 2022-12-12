import { defineConfig } from 'vite';
//import dns from 'dns'
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue'

//dns.setDefaultResultOrder('verbatim')

export default defineConfig({
    server: {
        fs: {
            // Allow serving files from one level up to the project root
            allow: ['..'],
          },
      },
    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.js'],
            refresh: true,
        }),
        vue({
            template: {
              compilerOptions: {
                isCustomElement: (tag) => ['md-linedivider'].includes(tag),
              }
            }
          })
    ],
});

