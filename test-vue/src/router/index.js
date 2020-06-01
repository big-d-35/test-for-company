import Vue from 'vue'
import Router from 'vue-router'
import Bussines from '../components/Bussines.vue'
import About from '../components/About.vue'
import Price from '../components/Price.vue'
import App from '../App.vue' 

Vue.use(Router)

export default new Router({
    routes: [
        
        {
            path: '/',
            name: 'Bussines',
            component: Bussines,
          
        },
        {
            path: '/about',
            name: 'About',
            component: About,
          
        },
        {
            path: '/price',
            name: 'Price',
            component: Price,
          
        },
    ]
})