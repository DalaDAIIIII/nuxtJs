export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'nuxtJs',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: ''
      },
      {
        name: 'format-detection',
        content: 'telephone=no'
      }
    ],
    link: [{
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico'
    }]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'element-ui/lib/theme-chalk/index.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/element-ui',
    '@/plugins/dayjs',
    '@/plugins/request'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: ['@nuxtjs/style-resources'],

  styleResource: {
    scss: [
      '@/assets/scss/index.scss'
    ]
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: [/^element-ui/],
  },
  router: {
    extendRoutes(routes, resolve) {
      // 清除 Nuxt.js 基于 pages 目录默认生成的路由表规则
      routes.splice(0)

      routes.push(...[{
        path: '/',
        component: 'pages/layout/index.vue',
        children: [{
          path: '', // 默认路由
          component: 'pages/home/index.vue',
          name: 'home'
        }, {
          path: '/login',
          component: 'pages/login/index.vue',
          name: 'login'
        }, {
          path: '/register',
          component: 'pages/login/index.vue',
          name: 'register'
        }, {
          path: '/settings',
          component: 'pages/settings/index.vue',
          name: 'settings'
        }, {
          path: '/editor',
          component: 'pages/editor/index.vue',
          name: 'editor'
        }, {
          path: '/article/:slug',
          component: 'pages/article/index.vue',
          name: 'article'
        }, {
          path: '/profile/:username',
          component: 'pages/profile/index.vue',
          name: 'profile'
        }]
      }])
    }
  }
}
