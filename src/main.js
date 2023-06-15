import {createApp} from 'vue'

import App from './App.vue'


// You can use the following starter router instead of the default one as a clean starting point
// import router from "./router/starter";
import router from "./router";


const app = createApp(App);

// Use Vue Router
app.use(router);

app.mount('#app')
