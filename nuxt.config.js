import pkg from './package';
const PrismicConfig = require('./prismic.config');

export default {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: 'Homee - Profesjonalna obsługa Twojej nieruchomości',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Zarządzanie najmem z gwarancją czynszu i Homestaging - przygotowanie mieszkania do sprzedaży i wynajmu' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon@2x.png' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Fira+Sans:wght@400;600;800&display=swap' }
    ],
    script: [
      // { innerHTML: '{ window.prismic = { endpoint: "' + PrismicConfig.apiEndpoint + '"} }' },
      // { src: '//static.cdn.prismic.io/prismic.min.js' }
    ],
    __dangerouslyDisableSanitizers: ['script'],
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#F05252' },

  /*
  ** Global CSS
  */
  css: [
    '~/assets/styles/main.scss',
  ],

  prismic: {
    endpoint: 'https://homee.cdn.prismic.io/api/v2',
    linkResolver: '@/plugins/link-resolver',
    htmlSerializer: '@/plugins/html-serializer',
  },

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/link-resolver.js',
    '~/plugins/html-serializer.js',
    '~/plugins/prismic-vue.js',
    './plugins/vue-awesome-swiper.js',
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/prismic',
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      config.resolve.alias['vue'] = 'vue/dist/vue.common'
    }
  }
}
