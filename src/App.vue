<template>
<NavBar/>
<!-- Conditionally Show the Cart Items -->

  <router-view/>
</template>

<script setup>
import NavBar from './components/NavBar.vue'
</script>

<style lang="scss">
@import './assets/scss/main.scss';
</style>
