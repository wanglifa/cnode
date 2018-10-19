import Vue from 'vue'
import Router from 'vue-router'
import PostList from '../components/PostList'
import Article from '../components/Article'
import Userinfo from '../components/Userinfo'
import SlideBar from '../components/SlideBar'
Vue.use(Router)

export default new Router({
  routes: [
    {
      name: 'postlist',
      path: '/',
      components: {
        main: PostList
      }
    },
    {
      name: 'article',
      path: '/topic/:id&author=:name',
      components: {
        main: Article,
        aside: SlideBar
      }
    },
    {
      name: 'user_info',
      path: '/user/:name',
      components: {
        main: Userinfo
      }
    }
  ]
})
