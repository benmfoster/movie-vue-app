import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import MoviesIndex from './views/MoviesIndex.vue'
import MoviesShow from './views/MoviesShow.vue'
import MoviesNew from './views/MoviesNew.vue'
import MoviesEdit from './views/MoviesEdit.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/movies',
      name: 'movies-index',
      component: MoviesIndex
    },
    {
      path: 'movies/:id',
      name: 'movies-show',
      component: MoviesShow
    },
    {
      path: 'movies/new',
      name: 'movies-new',
      component: MoviesNew
    },
    {
      path: 'movies/edit',
      name: 'movies-edit',
      component: MoviesEdit
    }]
})
