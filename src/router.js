import { createRouter, createWebHistory } from 'vue-router'
import Home from './components/Home.vue'
import PizzaDetail from './components/PizzaDetail.vue'
import PizzaList from './components/PizzaList.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/pizza',
        name: 'pizza-list',
        component: PizzaList
    },
    {
        path: '/pizza/:id',
        name: 'pizza-detail',
        component: PizzaDetail
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router