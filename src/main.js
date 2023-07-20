import { createApp } from 'vue'
import { createPinia } from 'pinia'
import VueToast from 'vue-toast-notification';
import "/node_modules/bootstrap-icons/font/bootstrap-icons.css"
import 'vue-toast-notification/dist/theme-bootstrap.css';
import 'vue-toast-notification/dist/theme-sugar.css';

import './assets/main.css'
import App from './App.vue'

const app = createApp(App)

app.use(createPinia()).use(VueToast);

app.mount('#app')
