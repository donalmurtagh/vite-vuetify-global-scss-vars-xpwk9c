import { fileURLToPath } from 'url'
import { defineConfig } from 'vite'
import { createVuePlugin as vue } from 'vite-plugin-vue2'
import Components from 'unplugin-vue-components/vite'
import { VuetifyResolver } from 'unplugin-vue-components/resolvers'

/******************
 * NOTE: This seems to take a while to load in StackBlitz, so you'll
 * see a blank page for several seconds ...wait for it.
 ******************/

export default defineConfig({
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  plugins: [
    vue(),
    Components({
      resolvers: [VuetifyResolver()],
    }),
  ],
  css: {
    preprocessorOptions: {
      sass: {
        additionalData: [
          // Make the variables defined in these files available to all components, without requiring an explicit
          // @import of the files themselves
          '@import "./src/styles/variables"',
          '@import "vuetify/src/styles/settings/_variables"',
          '', // end with newline
        ].join('\n'),
      },
    },
  },
})
