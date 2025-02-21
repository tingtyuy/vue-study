import './assets/main.css'
import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// import DataV, { setClassNamePrefix } from '@dataview/datav-vue3';
import DataVVue3 from '@kjgl77/datav-vue3'
import App from './App.vue'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'


const app = createApp(App);
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}
app.use(ElementPlus, { size: 'small', zIndex: 3000 })
// app.use(DataV, { classNamePrefix: 'dv-' });
app.use(DataVVue3)
app.mount('#app')
