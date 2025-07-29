import { createApp } from 'vue'
import App from './App.vue'
import './styles/main.scss'
import { loadSprite } from './utils/sprite'

loadSprite()

createApp(App).mount('#app')
