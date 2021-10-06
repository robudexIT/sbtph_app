import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"


import { createApp } from 'vue';

import App from './App.vue'
import BaseContainer from  './components/layout/BaseContainer.vue'
import BaseTable from './components/layout/BaseTable.vue'
import DropDownMenu from './components/layout/dropdown/DropDownMenu.vue'

import store from './store/index.js'
import router from './router.js'

const app = createApp(App)

app.component('base-container',BaseContainer)
app.component('base-table', BaseTable)
app.component('drop-down-menu',DropDownMenu)


app.use(store)
app.use(router)


app.mount('#app')
