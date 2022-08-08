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
      <button id="add-to-cart" @click="addToCart()"> Add To Cart </button>
      </div>

  </div>
</template>
</template>

<script setup>
import { state } from '@/data/state'
import ErrorBox from '@/components/ErrorBox.vue'
import StarRating from '@/components/StarRating.vue'
import { ref, onMounted, defineProps } from 'vue'

// Declaring Props
const props = defineProps(['id'])

// Declaring Variables
ref(localStorage.setItem('productID', props.id))
const productID = ref(parseInt(localStorage.getItem('productID')))
const cartItemsID = ref(JSON.parse(localStorage.getItem('cartItemsID')))
const cartItems = ref(JSON.parse(localStorage.getItem('cartItems')))
const product = ref([])
const errorMessage = ref(null)
const fetchComplete = ref(false)

// Methods To Get ITEM
const getSingleProduct = async () => {
  try {
    const response = await fetch(`https://fakestoreapi.com/products/${productID.value}`)
    const data = await response.json()
    product.value = data
    fetchComplete.value = true
    return product.value
  } catch {
    state.error = true
    errorMessage.value = 'Oops!, We are unable to load item'
  }
}

function addToCart () {
  const newCartItem = ref({
    productImage: product.value.image,
    productTitle: product.value.title,
    productRating: product.value.rating.rate,
    productID: product.value.productID,
    productPrice: product.value.price,
    productQuantity: 1
  })
  // Check if items Array == null;
  if (cartItems.value === null || cartItemsID.value === null) {
    // if items Array is null equate items array to product id && equate cartItems to newcartItems
    cartItems.value = [newCartItem.value]
    cartItemsID.value = [productID.value]
    // store Items Array && cartItems in local storage
    localStorage.setItem('cartItemsID', JSON.stringify(cartItemsID.value))
    localStorage.setItem('cartItems', JSON.stringify(cartItems.value))
    state.getItemsInCart()

    state.error = false
  } else {
    // Step One Check If product Id is in items array
    if ([productID.value].every(id => cartItemsID.value.includes(id)) === true) {
      // if true : do nothing
      errorMessage.value = 'Item Already Added to Cart'
      state.error = true
      return errorMessage.value
    } else {
      // add product ID to items Array && add newCart Items to cartItems
      cartItemsID.value = [...cartItemsID.value, productID.value]
      cartItems.value = [...cartItems.value, newCartItem.value]
      // store Items Array && cartItems in local storage
      localStorage.setItem('cartItemsID', JSON.stringify(cartItemsID.value))
      localStorage.setItem('cartItems', JSON.stringify(cartItems.value))
      state.getItemsInCart()
    }
  }
}

// Life Cycle Hooks
onMounted(() => {
  getSingleProduct()
})
</script>
