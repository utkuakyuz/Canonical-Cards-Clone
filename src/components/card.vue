<template>
 <div class="p-strip">
  <div class="row ">
   <div v-for="card in AnthonyJsonData.list" :key="card.ID" class="col-4 u-equal-height">
    <div class="p-card--highlighted u-flex u-align--left">
     <div class="p-card__content">
      <p class="uppercase">{{card.categories[0] == "1453" ? "Cloud and Server":"Other"}}</p>
      <hr>

      <img class="p-card__image" alt="" height="185" width="330" :src='card.featured_media'>
      <h4 class="p-card__heading"><a :href="card.link" target="blank"> {{card.title.rendered}}</a></h4>
      <!-- <h4 class="title"><a href="#"> {{card.title.rendered}}</a></h4> -->
     </div>
     <div class="footer author">
      By <a href="#">{{card.author == "631" || card.author == "217" || card.author == "669" ? "Anthony Dillon":"Other"}}</a>
      on 21st August 2021
     </div>
     <hr>
     <div class="footer">{{card.type}}</div>
    </div>
   </div>
  </div>
 </div>
</template>

<script setup>
 import {
  getAnthonyJson,
  AnthonyJsonData
 } from "../store/content";
</script>

<style scoped>
 /* .title{
  height:5rem;
} */
</style>