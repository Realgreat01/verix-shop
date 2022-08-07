import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProductDetails from '../views/ProductDetails.vue'
import ProductCategory from '../views/ProductCategory.vue'
import CartComponent from '../components/CartComponent.vue'

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
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
