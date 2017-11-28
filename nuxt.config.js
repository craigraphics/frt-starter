module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'ftr-starter',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    script: [
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js' },
      { src: 'https://use.fontawesome.com/9cbad47491.js' },
      { src: '/slick/slick.js' },
      { src: '/scripts/main.js' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: '/brand/webFonts.css' },
      { rel: 'stylesheet', href: '/brand/bootstrap.frontier.css' },
      { rel: 'stylesheet', href: '/brand/main-2.css' },
       { rel: 'stylesheet', href: '/slick/slick.css' },
       { rel: 'stylesheet', href: '/slick/slick-theme.css' }
    ]
  },
  css: [
    // CSS file in the project
    '@/assets/styles/main.scss'
  ],
  /*
  ** Customize the progress bar color
  */
  loading: { color: 'red' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, ctx) {
      if (ctx.dev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }

}
