import Vue from 'vue'
import VueRouter from 'vue-router'
import Listing from '../views/Listing.vue'
import Room from '../views/Room.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'listing',
        component: Listing
    },
    {
        path: '/room/:id',
        name: 'room',
        component: Room
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
