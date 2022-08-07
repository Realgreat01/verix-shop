<template>
  <div id="product-grid" >
    <div v-for="( product,index) in products" :key="index" class="product">
      <router-link :to="{ name: 'product', params: { id: product.id,}}">
        <div class="flex-rating">
            <h4 class="rating-rate">{{product.rating.rate}}</h4>
            <StarRating :ratingNumber="product.rating.rate" :ratingCount="product.rating.count" class="home-rating"/>
        </div>
        <img :src="product.image" alt="" class="product-image">
        <h4 class="title">{{product.title.substr(0, 40)}} <span v-if="product.title.length > 39">...</span></h4>
        <div class="flex-price">
            <h4 class="price">${{product.price}}</h4>
            <h4 class="category">{{product.category}}</h4>
        </div>
      </router-link>
  </div>
  </div>

</template>

<script setup>
import StarRating from '@/components/StarRating'
import { useRoute } from 'vue-router'
import { ref, defineProps, onMounted, watch } from 'vue'

// Defining Ref Attributes
const products = ref({})
const route = useRoute()
// Defining props
const props = defineProps({
  category: {
    type: String,
    default: 'No'
  }
})

// watching Params Changes
watch(route, (oldRoute, newRoute) => {
  getProductCategory(newRoute.params.category)
})

// Methods to get Products By Category
async function getProductCategory (category) {
  const response = await fetch(`https://fakestoreapi.com/products/category/${category}`)
  const data = await response.json()
  products.value = data
  console.log(data)
  return products.value
}

onMounted(() => {
  getProductCategory(route.params.category)
})
</script>
