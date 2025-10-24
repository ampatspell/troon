import { defineConfig } from 'vite';
import { builtinModules } from 'node:module';
// import common from '@rollup/plugin-commonjs';

// const injectFilename = () => {
//   return {
//     name: 'inject-filename',
//     transform(src: string, id: string) {
//       if (id.endsWith('.js')) {
//         return `const __filename = "${id}";\n` + src;
//       }
//     },
//   };
// };

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
      output: {
        entryFileNames: '[name].js',
      },
    },
  },
  plugins: [
    // injectFilename(),
    // common({
    //   include: './node_modules/**',
    // }),
  ],
});
