import { createApp } from 'vue'
import { createPinia } from 'pinia'
import VueAwesomePaginate from "vue-awesome-paginate";
// necessary css file
import "vue-awesome-paginate/dist/style.css";
import App from './App.vue'
import router from './router'

// import './assets/main.css'
import './index.css'
import 'flowbite';

const app = createApp(App)
app.use(VueAwesomePaginate)
app.use(createPinia())
app.use(router)

app.mount('#app')
