import { reactive } from 'vue'
const state = reactive({
  error: false,
  showCart: true
})

export { state }
console.log(state.error)