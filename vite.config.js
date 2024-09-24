import { defineConfig } from 'vite';
import path from 'path';
import { createHtmlPlugin } from 'vite-plugin-html';

export default defineConfig({
  base: '/Neon-Eva-Fan-Page/',
  build: {
    rollupOptions: {
      input: {
        main: 'index.html'
      }
    }
  },
  plugins: [
    createHtmlPlugin({
      inject: {
        injectTo: 'head',
        tags: [
          {
            tag: 'meta',
            attrs: {
              property: 'og:title',
              content: 'Neon Genesis Evangelion Fan Page',
            },
          },
          {
            tag: 'meta',
            attrs: {
              property: 'og:type',
              content: 'website',
            },
          },
          {
            tag: 'meta',
            attrs: {
              property: 'og:url',
              content: 'https://github.com/gxstavo19k/Neon-Eva-fan-Page-fullJS',
            },
          },
          {
            tag: 'meta',
            attrs: {
              property: 'og:image',
              content: 'https://raw.githubusercontent.com/gxstavo19k/Neon-Eva-fan-Page-fullJS/main/docs/.github/meta-preview.png',
            },
          },
          {
            tag: 'meta',
            attrs: {
              property: 'og:description',
              content: 'Este site é feito com o intuito de ser um projeto desenvolvido individualmente.',
            },
          },
          {
            tag: 'meta',
            attrs: {
              property: 'og:site_name',
              content: 'Neon Genesis Evangelion - Fan Page',
            },
          },
          {
            tag: 'meta',
            attrs: {
              property: 'og:locale',
              content: 'pt_BR',
            },
          },
          {
            tag: 'meta',
            attrs: {
              name: 'twitter:card',
              content: 'summary_large_image',
            },
          },
          {
            tag: 'meta',
            attrs: {
              name: 'twitter:image',
              content: 'https://raw.githubusercontent.com/gxstavo19k/Neon-Eva-fan-Page-fullJS/main/docs/.github/meta-preview.png',
            },
          },
          {
            tag: 'meta',
            attrs: {
              name: 'keywords',
              content: 'Neon Genesis Evangelion, Fan Page, Anime',
            },
          },
          {
            tag: 'meta',
            attrs: {
              name: 'description',
              content: 'Fan Page dedicada ao anime Neon Genesis Evangelion.',
            },
          },
        ],
      },
    }),
  ],
  server: {
    port: 3000,
    strictPort: true
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@components': path.resolve(__dirname, './src/components'),
      '@modules': path.resolve(__dirname, './src/modules'),
      '@styles': path.resolve(__dirname, './src/styles')
    },
  }
});