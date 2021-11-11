import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import GameView from '../views/GameView.vue'
import GameList from '../views/GameList.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/GameView/',
    name: 'GameView',
    component: GameView
  },
  {
    path: '/GameView/:id',
    name: 'GameView',
    component: GameView
  },
  {
    path: '/GameList/',
    name: 'GameList',
    component: GameList
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
