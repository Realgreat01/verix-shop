<template>
  <nav>
    <img src="../assets/images/logo.svg" alt="" id="icon">
    <ul id="desktop-nav">
      <router-link to="/"><li> Home </li></router-link>
      <router-link :to="{name: 'product-category', params: {category: `jewelery`}}"> <li>Jewelery </li></router-link>
      <router-link :to="{name: 'product-category', params: {category: `women's clothing`}}"><li> Women's Clothing </li> </router-link>
      <router-link :to="{name: 'product-category', params: {category: `men's clothing` }}"><li> Men's Clothing </li></router-link>
      <router-link :to="{name: 'product-category', params: {category: 'electronics'}}"><li> Electronics </li></router-link>
    </ul>
      <div id="cart-content-box">
        <img src="../assets/images/cart.svg" alt="" @click="router.push('/cart')" id="cart">
        <p v-if="state.itemsInCart > 0">{{state.itemsInCart}}</p>
      </div>
      <div id="toggle">
        <img src="../assets/images/main-menu.svg" alt="showMenu" v-if="!menuIsShown" @click="menuIsShown = true">
        <img src="../assets/images/cancel-menu.svg" alt="showMenu" v-if="menuIsShown" @click="menuIsShown = false">
      </div>
  </nav>
  <!-- Mobile-nav -->
  <ul id="mobile-nav" v-if="menuIsShown">
    <router-link @click="menuIsShown = false" to="/"><li> Home </li></router-link>
    <router-link @click="menuIsShown = false" :to="{name: 'product-category', params: {category: `jewelery`}}"> <li>Jewelery </li></router-link>
    <router-link @click="menuIsShown = false" :to="{name: 'product-category', params: {category: `women's clothing`}}"><li> Women's Clothing </li> </router-link>
    <router-link @click="menuIsShown = false" :to="{name: 'product-category', params: {category: `men's clothing` }}"><li> Men's Clothing </li></router-link>
    <router-link @click="menuIsShown = false" :to="{name: 'product-category', params: {category: 'electronics'}}"><li> Electronics </li></router-link>
  </ul>

</template>
<script setup>
import { useRouter } from 'vue-router'
import CartComponent from '@/views/CartComponent.vue'
import { state } from '@/data/state'
import { ref } from 'vue'

const menuIsShown = ref(false)
const router = useRouter()
</script>
