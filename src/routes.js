import App from './App'
import About from './components/views/About.vue'

const routes = [
    { path: '/', name: 'home', component: App },
    { path: '/about', name: 'about', component: About }
  ]
  
export default routes