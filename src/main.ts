import './assets/styles/main.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

import { createApp } from 'vue'
import { Icon } from '@iconify/vue'
import App from './App.vue'

const app = createApp(App)
app.component('font-awesome-icon', Icon)
app.mount('#app')
