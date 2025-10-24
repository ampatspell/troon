import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    outDir: '.vite/preload',
    emptyOutDir: false,
    lib: {
      formats: ['cjs'],
      entry: 'electron/preload.ts',
      fileName: 'preload',
    },
  },
});
