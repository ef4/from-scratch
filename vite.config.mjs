import { defineConfig } from "vite";
import { babel } from '@rollup/plugin-babel';
import { optimizeDeps } from '@embroider/vite';

export default defineConfig(() => {
  return {
    plugins: [
      babel({ babelHelpers: 'bundled' })
    ],
    optimizeDeps: optimizeDeps(),
  };
});
