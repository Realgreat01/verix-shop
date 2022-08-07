<template>
  <nav>
    <img src="../assets/images/logo.svg" alt="">
    <ul>
      <router-link to="/"><li> Home </li></router-link>
      <router-link :to="{name: 'product-category', params: {category: `jewelery`}}"> <li>Jewelery </li></router-link>
      <router-link :to="{name: 'product-category', params: {category: `women's clothing`}}"><li> Women's Clothing </li> </router-link>
      <router-link :to="{name: 'product-category', params: {category: `men's clothing` }}"><li> Men's Clothing </li></router-link>
      <router-link :to="{name: 'product-category', params: {category: 'electronics'}}"><li> Electronics </li></router-link>
    </ul>
      <img src="../assets/images/cart.svg" alt="" @click="$emit('showCart')">
  </nav>
</template>
