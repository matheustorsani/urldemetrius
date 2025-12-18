import { createRouter, createWebHistory } from 'vue-router'
import Main from './../views/Main.vue'
import Forum from './../views/Forum.vue'
import Projects from './../views/Projects.vue'
import TheEndOfTheWorld from './../views/TheEndOfTheWorld.vue'
import NotFound from './../views/NotFound.vue'

const routes = [
  { path: '/', component: Main },
  { path: '/forum', component: Forum },
  { path: '/projects', component: Projects },
  { path: '/newyear', component: TheEndOfTheWorld },

  { path: '/:pathMatch(.*)*', component: NotFound }
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})
