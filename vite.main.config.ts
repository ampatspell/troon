import { defineConfig } from 'vite';
import { builtinModules } from 'node:module';

export default defineConfig({
  build: {
    outDir: '.vite',
    emptyOutDir: false,
    lib: {
      formats: ['es'],
      entry: 'electron/main.ts',
      fileName: 'main',
    },
    rollupOptions: {
      external: ['electron', ...builtinModules, 'epoll'],
    },
  },
});
