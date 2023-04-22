// https://v3.nuxtjs.org/api/configuration/nuxt.config
// Add ant-design to Nuxt 3: https://github.com/vueComponent/ant-design-vue/discussions/5210

import Components from 'unplugin-vue-components/vite'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'

export default defineNuxtConfig({
  typescript: {
    shim: false,
    strict: false,
  },

  app: {
    head: {
      titleTemplate: '%s - Test',
      title: 'Home',
    },
  },

  css: ['@/assets/styles/tailwind.scss', '@/assets/styles/main.scss'],

  modules: [
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
  ],

  // components: https://go.nuxtjs.dev/config-components
  components: [{ path: '~/components', pathPrefix: false }],

  googleFonts: {
    display: 'swap',
    families: {
      'Lexend Deca': [100, 200, 300, 400, 600, 700, 800, 900],
    },
  },

  vite: {
    plugins: [
      Components({
        resolvers: [AntDesignVueResolver({ resolveIcons: true })],
      }),
    ],
    ssr: {
      noExternal: [
        'moment',
        'compute-scroll-into-view',
        'ant-design-vue',
        '@ant-design/icons-vue',
      ],
    },
  },
})
