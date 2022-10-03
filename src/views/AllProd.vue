<script setup>
import { useAxios } from '@vueuse/integrations/useAxios'
import { ref, onMounted } from 'vue'
// const { data, isFinished } = useAxios('https://fakestoreapi.com/products')
const { data, isFinished } = useAxios('http://localhost:9000/store/products')
// const { data, isFinished } = useAxios(`http://localhost:9000/store/products?offset=${0}&limit=2`)

// let page = onClickHandler()
</script>
    


<template>
    <div class="mt-10">
        <div v-if="isFinished">
            <router-link :to="{name: 'product' , params:{id: p.id}}" v-for="p in data.products" :key="p.id">
                <p class="text-xl text-red-300">{{p.title}}</p>
            </router-link>
        </div>
        <div v-else class="text-black text-2xl">загрузка</div>
        <div class="mt-10 text-xl text-red-900">
    <vue-awesome-paginate
    
    :total-items="data.count"
    :items-per-page="1"
    :max-pages-shown="5"
    :current-page="1"
    :on-click="onClickHandler"
  />
  </div>
    </div>
</template>


<style >
    .pagination-container {
      display: flex;
      column-gap: 10px;
    }
    .paginate-buttons {
      height: 40px;
      width: 40px;
      border-radius: 20px;
      cursor: pointer;
      background-color: rgb(242, 242, 242);
      border: 1px solid rgb(217, 217, 217);
      color: black;
    }
    .paginate-buttons:hover {
      background-color: #d8d8d8;
    }
    .active-page {
      background-color: #3498db;
      border: 1px solid #3498db;
      color: white;
    }
    .active-page:hover {
      background-color: #2988c8;
    }
</style>