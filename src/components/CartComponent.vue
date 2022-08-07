<template>
  <div v-for="(product, index) in cartItems" :key="index" id="cart-box">
  <h1>{{product.productTitle}}</h1>
  <img :src="product.productImage" :alt="product.title">
  <h2>{{product.productQuantity}}</h2>
  <button @click="deleteItem(index)">Delete</button>
  </div>
</template>

<script setup>
import { ref, watch, onMounted } from 'vue'
const cartItems = ref(JSON.parse(localStorage.getItem('cartItems')))
const cartItemsID = ref(JSON.parse(localStorage.getItem('cartItemsID')))
watch(cartItems, (oldValue, newValue) => {
  console.log('OldValue :', oldValue)
  console.log('newValue :', newValue)
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
onMounted(() => {
  console.log(cartItems.value)
})
</script>
