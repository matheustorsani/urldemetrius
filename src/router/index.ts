import { createRouter, createWebHistory } from 'vue-router'
// import Main from './../views/Main.vue'
// import Forum from './../views/Forum.vue'
// import Projects from './../views/Projects.vue'
// import TheEndOfTheWorld from './../views/TheEndOfTheWorld.vue'
// import NotFound from './../views/NotFound.vue'

const routes = [
  { path: '/', component: () => import('./../views/Main.vue') },
  { path: '/forum', component: () => import('./../views/Forum.vue') },
  { path: '/projects', component: () => import('./../views/Projects.vue') },
  { path: '/newyear', component: () => import('./../views/TheEndOfTheWorld.vue') },

  { path: '/:pathMatch(.*)*', component: () => import('./../views/NotFound.vue') },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})
