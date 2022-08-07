<template>
<div id="rating-star">
  <!-- Getting Rated Stars -->
    <div class="rating-image" v-for="index in Math.round(ratingNumber)" :key="index">
      <img src="../assets/images/star.svg" alt="">
  </div>
  <!-- Getting the black stars for rating left -->
  <div class="rating-image" v-for="index in 5 - Math.round(ratingNumber)" :key="index">
       <img src="../assets/images/white-star.svg" alt="">
  </div>

<!-- Number of people Rating the item -->
  <h3>( {{ratingCount}} )</h3>
</div>
</template>

<script>
export default {
  props: {
    ratingNumber: {
      type: Number,
      required: true
    },
    ratingCount: {
      type: Number
    }
  }
}
</script>
<style lang="scss" scoped>
#rating-star{
  display:flex;
  align-items: center;
  justify-content: center;
  height:fit-content;
  .rating-image{
    display:inline;
    align-items:center;
    max-width: 100px;
    img{
      height: 14px;
      margin: 2px;
    }
  }
  h3{
    display: inline;
    margin: 0 5px;
    font-weight: 500;
    font-size: 16px;
  }
}

</style>
