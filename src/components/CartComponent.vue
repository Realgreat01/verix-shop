<template>
<template v-if="state.error">
  <ErrorBox :errorMessage = "errorMessage"/>
</template>
<div id="cart-box">
  <div v-for="(product, index) in cartItems" :key="index" class="cart-item">
  <div id="product-info">
    <img :src="product.productImage" :alt="product.title" id="product-image">
  </div>
  <div id="product-details">
    <h1 id="title">{{product.productTitle}}</h1>
    <h2 id="price"><span class="order-sum">Price </span>${{product.productPrice}}</h2>
    <button @click="product.productQuantity > 0 ? --product.productQuantity : product.productQuantity = 0"> - </button><span id="quantity">{{product.productQuantity}}</span><button @click="product.productQuantity < 50 ? product.productQuantity++ : state.error = true"> + </button>
    <h2 id="total"><span class="order-sum">Total </span>${{(product.productPrice * product.productQuantity).toFixed(2)}}</h2>
  </div>
    <img src="../assets/images/trash.svg" @click.prevent="deleteItem(index)" id="trash-icon">
  </div>
</div>
</template>

<script setup>
import { state } from '@/data/state.js'
import ErrorBox from './ErrorBox.vue'

// Importing important variables
import { ref, watch } from 'vue'
const cartItems = ref(JSON.parse(localStorage.getItem('cartItems')))
const cartItemsID = ref(JSON.parse(localStorage.getItem('cartItemsID')))
const errorMessage = ref('Out of Stock')

// Watching for State Changes in the Cart Items Content
watch(cartItems, (oldValue, newValue) => {
  cartItems.value = newValue.value
})

function deleteItem (value) {
  const removedCartItems = cartItems.value.splice(value, 1)
  const removedCartItemsID = cartItemsID.value.splice(value, 1)

  // Get Remaining Items in the Cart
  const filterCart = cartItems.value.filter(item => item !== removedCartItems)
  const filterCartID = cartItemsID.value.filter(item => item !== removedCartItemsID)

  // Saving Filtered Item to LocalStorage
  localStorage.setItem('cartItemsID', JSON.stringify(filterCartID))
  localStorage.setItem('cartItems', JSON.stringify(filterCart))
}
</script>
