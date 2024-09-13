import { defineConfig } from "vite";
import { babel } from '@rollup/plugin-babel';
import { optimizeDeps, resolver } from '@embroider/vite';

export default defineConfig(() => {
  return {
    plugins: [
      babel({ babelHelpers: 'bundled' }),
      resolver(),
    ],
    optimizeDeps: optimizeDeps(),
  };
});
