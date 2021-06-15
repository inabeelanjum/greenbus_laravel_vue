import { createApp } from 'vue'

import App from './App.vue'
import router from './routes'
import store from './store'
import VueAxios from 'vue-axios';
import axios from 'axios';
import token from './axios.js'
createApp(App).use(router).use(store).use(VueAxios, axios).mount('#App')
