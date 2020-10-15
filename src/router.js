import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import Contact from '@/components/Contact'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home,
            props: true
        },
        {
            path: '/addContact',
            name: 'Contact',
            component: Contact,
            props: true
        }
    ]
})