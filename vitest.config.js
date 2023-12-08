import { configDefaults, defineConfig, mergeConfig } from 'vitest/config';
import viteConfig from './vite.config';
import { fileURLToPath, URL } from 'node:url';

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      coverage: {
        reporter: ['text', 'lcov']
      },
      include: ['**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
      exclude: [...configDefaults.exclude, 'e2e/*'],
      root: fileURLToPath(new URL('./', import.meta.url)),
      clearMocks: true,
      globals: true,
      environment: 'jsdom',
      alias: {
        '@fixtures': fileURLToPath(new URL('./tests/unit/fixtures', import.meta.url)),
        '@gtec-microfront/util-module': fileURLToPath(
          new URL('./tests/mocked-lib/gtec-microfront-util-module-mock.ts', import.meta.url)
        )
      }
    }
  })
);
