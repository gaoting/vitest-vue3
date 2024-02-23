import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import directives from './directives/index.ts'

const app = createApp(App)

// 全局自定义指令
app.use(directives)


app.mount('#app')
