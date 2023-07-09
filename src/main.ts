import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { buildDependencies } from './config/project.dependencies'

const app = createApp(App)
buildDependencies(app);
app.mount('#app')
