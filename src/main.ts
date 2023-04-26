import { createApp } from 'vue'
import App from './App.vue'
import 'vant/es/toast/style'
import router from './router'
import "./styles/index.scss"

const app = createApp(App)
app.use(router)
app.mount('#app')
