import { createRouter, createWebHistory } from 'vue-router'
import Main from './../views/Main.vue'
import Forum from './../views/Forum.vue'
//import Projects from './../views/Projects.vue'

const routes = [
  { path: '/', component: Main },
  { path: '/forum', component: Forum },
  // { path: '/projects', component: Projects },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})
