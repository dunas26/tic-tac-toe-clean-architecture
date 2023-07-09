import "reflect-metadata";

import { createApp } from 'vue'
import { createPinia } from 'pinia';
import './style.css'
import App from './App.vue'

import { buildDependencies } from './config/project.dependencies'

const pinia = createPinia();

const app = createApp(App);
app.use(pinia);

buildDependencies();
app.mount('#app')
