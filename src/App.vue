<template>
  <div>
    <!-- <Card></Card> -->
    <div class="p-strip">
      <div class="row">
        <div class="col-7 justify-text">
            Utku Akyüz, Web Developer Position at Canonical Code Test <br><br>
            This code runs with Vue&Vite.
            Cards below can be found in the components folder, data is the response of wordpress API of Anthony Dillon. 
            In the store folder, data is stored as a object, in a list. AnthonyJsonData object is API's response data.
            In the service folder, base API is constructed with modifiable URL as global axios parameter. 
            createService.js and restServices.js are used in order to have a efficient API interface, very useful for complex systems.
            In this project, only one API is used, so there is just one URL at urls.js and one Value at defaultValues.js 
            When getAnthonyJson function triggers API functions, a service is created and its URL, value, headers (parameters if necessary) 
            is detected by baseFunc.js. BaseFunc.js works like a filter to determine data type, headers, method and response or errors. 
            Every request and service is checked with BaseFunc.js, moreover, there could be more complicated services with different methods
            original baseFunc.js has a capacity to control all request methods and all errors (such as tokens,urls,unauthorizations etc.) 
            <br><br>
            To run the code: <br>
            1- Type npm i to console <br>
            2- Type npm run dev to start vite server at your local.
        </div>
        <div class="col-5 justify-text">
          <br><br>
          There is some missing properties in vanilla framework,for them, classes and styles are written to scss file.
          <br> 
          Using just one API for one request with single axios post method was way more simpler, however, I just wanted to show you how I developed my system to handle requests
          and how axios operations are controlled
          <br>
          Lastly, content authors with ID 631, 217, 669 are assumed as Anthony Dillon. Category with ID 1453 is assumed as Cloud and Server. <br>
          API is responsing with ID numbers, so code checks them with an if condition and assumed them as defaults.
        </div>
      </div>
    </div>
    <hr>
    <Card></Card>
  </div>
</template>

<script setup>
import Card from "./components/card.vue"
import {  getAnthonyJson, AnthonyJsonData } from "./store/content";
getAnthonyJson()
</script>
