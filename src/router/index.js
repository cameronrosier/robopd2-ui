import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BuilderView from '../views/BuilderView.vue'
import ItemDBView from '../views/ItemDBView.vue'
import ItemView from '../views/ItemView.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        alias: ['/home'],
        name: 'HomeView',
        component: HomeView,
    },
    {
        path: '/builder',
        name: 'BuilderView',
        component: BuilderView,
    },
    {
        path: "/itemdb",
        name: "ItemDBView",
        component: ItemDBView,
    },
    {
        path: "/items",
        component: ItemView,
        props: route => ({ itemName: route.query.itemName, itemType: route.query.itemType }),
    }
]
const router = new VueRouter({
    mode: 'history',
    routes,
})

export default router