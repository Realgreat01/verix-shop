import { reactive, watch } from 'vue'
const body = document.body
const state = reactive({
  error: false,
  showCart: true,
  itemsInCart: 0,
  itemsArray: [],
  getItemsInCart () {
    const addedItems = JSON.parse(localStorage.getItem('cartItemsID'))
    if (addedItems !== [] && addedItems !== 'null') {
      this.itemsInCart = addedItems.length
    } else {
      this.itemsInCart = 0
    }
    return this.itemsInCart
  },
  changed () {
    if (this.error) {
      body.style.overflow = 'hidden'
    } else {
      body.style.overflow = 'visible'
    }
  }
})
// state.getItemsInCart()
export { state }
