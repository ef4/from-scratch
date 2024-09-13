import { defineConfig } from "vite";
import { babel } from '@rollup/plugin-babel';
import { optimizeDeps, resolver, templateTag } from '@embroider/vite';

export default defineConfig(() => {
  return {
    plugins: [
      babel({ 
        babelHelpers: 'bundled',
        extensions: ['.js', '.gjs'],
       }),
      resolver(),
      templateTag(),
    ],
    optimizeDeps: optimizeDeps(),
  };
});
