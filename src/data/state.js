import { reactive, watch } from 'vue'
const body = document.body
const state = reactive({
  error: false,
  showCart: true,
  itemsInCart: 0,
  itemsArray: [],
  getItemsInCart () {
    const addedItems = JSON.parse(localStorage.getItem('cartItems'))
    if (addedItems !== [] && addedItems !== 'null') {
      addedItems.map((items, index) => {
        this.itemsArray.push(index)
        return this.itemsArray
      })
      if (addedItems.length !== 0) {
        const itemsLeft = this.itemsArray.reduce((a, b) => { return b + a })
        this.itemsInCart = itemsLeft + 1
      } else {
        this.itemsInCart = 0
      }
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
export { state }
