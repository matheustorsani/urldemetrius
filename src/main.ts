import { createApp } from 'vue'
import './styles/styles.scss'
import { router } from './router'
import App from './App.vue'

createApp(App).use(router).mount('#app')
