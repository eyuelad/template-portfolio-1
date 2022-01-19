export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  head: {
    title: 'Jogn Doe | Front-end Web Developer',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    script: [
      {
        src: 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.9.1/gsap.min.js',
        defer: true,
      },
      {
        src: 'https://unpkg.com/gsap@3/dist/ScrollTrigger.min.js',
        defer: true,
      },
    ],
  },

  css: ['@/assets/css/main.css'],

  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  buildModules: ['@nuxtjs/tailwindcss', '@nuxt/postcss8'],

  modules: [],

  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  },
}
