import path from 'path';
import { defineConfig } from 'vite';
import pugPlugin from 'vite-plugin-pug';

export default defineConfig({
  plugins: [pugPlugin()],
  root: '.',
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, './index.html'),
        festival_asso: path.resolve(__dirname, './festival_asso.html'),
        infos_pratiques: path.resolve(__dirname, './infos_pratiques.html'),
      },
    },
  },
});
