<template>
<template v-if="state.error">
  <ErrorBox :errorMessage="errorMessage"/>
</template>
<template v-if="fetchComplete">
    <div id="single-product">
      <img :src="product.image" alt="" class="product-image">
      <div>
        <div class="flex-rating">
            <h4 class="category">{{product.category}}</h4>
            <StarRating :ratingNumber="product.rating.rate" :ratingCount="product.rating.count" class="rating-product"/>
        </div>
        <h4 class="title">{{product.title}}</h4>
        <h4 class="price">${{product.price}}</h4>
        <p class="description">{{product.description}}</p>
        <div id="quantity">
          <button @click="quantity > 0 ? --quantity : quantity = 0"> - </button> {{quantity}} <button @click="quantity++"> + </button>
        </div>
      <button id="add-to-cart" @click="addToCart()"> Add To Cart </button>
      </div>

  </div>
</template>
</template>

<script setup>
import { state } from '@/data/state'
import ErrorBox from '@/components/ErrorBox.vue'
import StarRating from '@/components/StarRating.vue'
import axios from 'axios'
import { ref, onMounted, defineProps } from 'vue'

// Declaring Props
const props = defineProps(['id'])

// Declaring Variables
ref(localStorage.setItem('productID', props.id))
const productID = ref(parseInt(localStorage.getItem('productID')))
const cartItemsID = ref(JSON.parse(localStorage.getItem('cartItemsID')))
const cartItems = ref(JSON.parse(localStorage.getItem('cartItems')))
const product = ref([])
const errorMessage = ref(['item added to box'])
const fetchComplete = ref(false)
const quantity = ref(0)

// Methods To Get ITEM
const getSingleProduct = async () => {
  const response = await fetch(`https://fakestoreapi.com/products/${productID.value}`)
  const data = await response.json()
  product.value = data
  console.log(data)
  fetchComplete.value = true
  return product.value
}

function addToCart () {
  const newCartItem = ref({
    productImage: product.value.image,
    productTitle: product.value.title,
    productRating: product.value.rating.rate,
    productID: product.value.productID,
    productQuantity: quantity.value
  })
  // Step One Check If product Id is in items array
  if (cartItems.value === null || cartItemsID.value === null) {
    cartItems.value = [newCartItem.value]
    cartItemsID.value = [productID.value]
    localStorage.setItem('cartItemsID', JSON.stringify(cartItemsID.value))
    localStorage.setItem('cartItems', JSON.stringify(cartItems.value))
    console.log(cartItems.value)
    console.log(cartItemsID.value)
    console.log('item was null')
    // if true : do nothing
    // if false :
    // Check if items Array == null;
    // if items Array is null equate items array to product id && equate cartItems to newcartItems
    // Stringify items Array && cartItems
    // add product ID to items Array && add newCart Items to cartItems
    // store Items Array && cartItems in local storage
  } else {
    if ([productID.value].every(id => cartItemsID.value.includes(id)) === true) {
      console.log('id is in items array')
      return ''
    } else {
      cartItemsID.value = [...cartItemsID.value, productID.value]
      cartItems.value = [...cartItems.value, newCartItem.value]
      localStorage.setItem('cartItemsID', JSON.stringify(cartItemsID.value))
      localStorage.setItem('cartItems', JSON.stringify(cartItems.value))
      console.log(cartItems.value)
      console.log(cartItemsID.value)
      console.log('added to items array')
    }
  }
}

// Life Cycle Hooks
onMounted(() => {
  getSingleProduct()
  // console.log(cartItems.value)
})
</script>
