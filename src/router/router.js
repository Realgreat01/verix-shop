import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProductDetails from '../views/ProductDetails.vue'
import ProductCategory from '../views/ProductCategory.vue'
import CartComponent from '../views/CartComponent.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/product/:id',
    name: 'product',
    component: ProductDetails,
    props: true
  },
  {
    path: '/products/category/:category',
    name: 'product-category',
    component: ProductCategory,
    props: true
  },
  {
    path: '/cart',
    name: 'cart',
    component: CartComponent
  },
  {
    path: '/:catchAll(.*)*',
    name: 'NotFound',
    component: HomeView
  }
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

export default router
