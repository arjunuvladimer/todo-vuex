import { createApp } from 'vue'
import App from './App.vue'
import store from './store'

// Mounted Store with APP Component => Application
createApp(App).use(store).mount('#app')

// App Component Uses Middleware Store To Mount To Index.html