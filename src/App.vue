<template>
<NavBar/>
<template>
  <CartComponent />
</template>
  <router-view/>
</template>

<script setup>
import NavBar from './components/NavBar.vue'
import CartComponent from '@/components/CartComponent.vue'
import showCart from './data/state'
import { defineEmits } from 'vue'

// const emit = defineEmits(['showCart'])
</script>

<style lang="scss">
@import './assets/scss/main.scss';
</style>
