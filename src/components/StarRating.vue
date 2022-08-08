<template>
<div id="stars">
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
</div>
<div id="count">
    (<span>{{ratingCount}}</span> <img src="../assets/images/person.svg" alt="">)
  </div>
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
#stars{
  display:flex;
  justify-content: flex-start;
  align-items: flex-end;
  flex-direction: column;
  height: fit-content;
}
#rating-star{
  display:flex;
  align-items: center;
  justify-content: flex-end;
  height:fit-content;
  .rating-image{
    display:inline-block;
    align-items:center;
    max-width: 100px;
    img{
      height: 12px;
      margin: 2px;
    }
  }
}
#count{
    display: flex;
  align-items: center;
  justify-content: center;
    font-size: 14px;
    padding: 2px;
    width: fit-content;
    font-weight: 500;
    margin-top: -4px;
    span{
      font-weight: 600;
      color: crimson;
      margin: 0 2px;
      display: inline-block;
      font-size: 12px;
    }
    img{
      height: 10px;
      display:block;
    }
  }

</style>
