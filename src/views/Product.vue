<script setup>
import { useAxios } from "@vueuse/integrations/useAxios";
import { ref, onMounted, reactive, computed } from "vue";
import { useRoute } from "vue-router";
import axios from "axios";
import router from "../router";
const route = useRoute();
let id = ref(route.params.id)
// let url =  `https://fakestoreapi.com/products/` + id.value
let url =  `http://localhost:9000/store/products?id=` + id.value
      console.log(id.value);
      console.log(url);
  const { data, isFinished } = useAxios(
    url
  );
</script>
<template>
  <div>
      <div class="mt-10 text-2xl text-red-500" v-for="product in data.products" :key="product.id">{{ product.title }}</div>
      <!-- <div class="mt-10 text-2xl text-red-500" :key="data.id">{{ data.title }}</div> -->
      </div>
</template>


<style>
</style>