<template>
  <div id="error">
    <h2 @click="closeBox()" id="close-box"><img src="../assets/images/cancel.svg" alt=""></h2>
   <p> {{props.errorMessage}} </p>
  </div>
  <div  id="resolve-error">
  </div>
</template>

<script setup>
import { state } from '@/data/state'
import { defineProps } from 'vue'
const props = defineProps({
  errorMessage: {
    type: String,
    default: 'No'
  }
})

function closeBox () {
  state.error = false
  return state.error
}
</script>
