import { createApp } from 'vue'
import App from './App.vue'
import Vant from 'vant';
import 'vant/lib/index.css';
import router from "@/routers";
const app = createApp(App);
import "./style.less"
app.use(Vant);
// 使用路由
app.use(router)
app.mount('#app');
if(typeof window.ethereum != 'undefined'){
    console.log("MataMask is installed!")
}