// 引入createRouter
import {createRouter, createWebHistory} from "vue-router";
import MandateView from '@/components/Mandate.vue'
const routes = [
    {
        path: "/",
        name: "home",
        component: MandateView
    },
    {
        path: "/account",
        name: "account",
        component: () => import("@/components/AccountView.vue")
    },
    {
        path: "/board", 
        name: "board",
        component: () => import("@/components/BoardView.vue")
    }
]

// 创建一个路由
const router = createRouter({
        // vue3路由必须指定工作模式
        history: createWebHistory(process.env.BASE_URL ? process.env.BASE_URL : '/'),
        routes
    }
)

export default router

