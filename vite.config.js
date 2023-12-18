import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  define: {
    'process.env': process.env
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src')
    }
  },
  build: {
    target: 'es6',
    rollupOptions: {
      input: 'src/main.ts',
      external: ['vue', /^@sdo\/.+/, 'axios', /^@gtec-microfront\/.+/],
      output: {
        format: 'system',
        entryFileNames: `js/app.js`
      },
      preserveEntrySignatures: 'strict'
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
					@import '@/assets/styles/commons/_commons.scss';
				`
      }
    }
  },
  base: 'https://localhost:8650',
  plugins: [
    vue({
      template: {
        transformAssetUrls: {
          base: '/src'
        }
      },
      script: {
        propsDestructure: true,
        defineModel: true
      }
    })
  ]
});
