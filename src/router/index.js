import Vue from 'vue'
import Router from 'vue-router'
import Header from '@/components/Header'
import Main from '@/components/Main'
import Footer from '@/components/Footer'
// import Index from '@/components/Index'
import Exit from '@/components/Exit'
import News from '@/components/News'
import Mine from '@/components/Mine'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      components: {
        header: Header,
        main: Main,
        footer: Footer
      }
    },
    {
      path: '/index',
      name: 'Hello',
      components: {
        header: Header,
        main: Main,
        footer: Footer
      }
    },
    {
      path: '/news',
      name: 'Hello',
      components: {
        header: Header,
        main: News,
        footer: Footer
      }
    },
    {
      path: '/mine',
      name: 'Hello',
      components: {
        header: Header,
        main: Mine,
        footer: Footer
      }
    },
    {
      path: '/exit',
      name: 'Hello',
      components: {
        header: Header,
        main: Exit,
        footer: Footer
      }
    }
  ]
})
