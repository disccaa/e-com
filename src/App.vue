<script setup>
import { RouterLink, RouterView } from "vue-router";

import NavBar from "./components/NavBar.vue";
</script>

<template>
  <div class="text-white  container mx-auto">
    <div class=" fixed top-0 left-0 right-0 px-6 sm:px-0 bg-[#212121]  ">
      <nav class="container mx-auto xl:max-w-7xl ">
      <div class="flex justify-between">
        <h1 class="">Best e-comm</h1>
        <div class="hidden justify-around basis-4/12 sm:flex">
          <RouterLink to="/home" class="hover:text-red-500 active:text-orange-500 ">home</RouterLink>
          <RouterLink to="/male">men</RouterLink>
          <RouterLink to="/women">women</RouterLink>
          <RouterLink to="/kids">kids</RouterLink>
          <RouterLink to="/all">all</RouterLink>
        </div>
        <button class="burger sm:hidden  z-10 relative block select-none appearance-none border-none outline-none bg-none cursor-pointer duration-400 hover:span:nth-child(1):bg-red-500">
         <span class="w-8 h-1 bg-white mb-1 relative block rounded-md"></span>
         <span class="w-8 h-1 bg-white mb-1 relative block rounded-md hover:only:bg-red-500"></span>
         <span class="w-8 h-1 bg-white mb-1 relative block rounded-md"></span>
        </button>
      </div>
    </nav>
    </div>
    

    <RouterView />

  
  </div>
</template>
