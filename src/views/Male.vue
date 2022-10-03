<script setup>
    import { useAxios } from '@vueuse/integrations/useAxios'
    const { data, isFinished } = useAxios('http://localhost:9000/store/products')
    console.log()
    </script>
        
    
    
    <template>
        <div class="mt-10">
            <div v-if="isFinished">
              <router-link to="/home" class="text-xl text-red-500">
lol
              </router-link>
            </div>
            <div v-else class="text-black text-2xl">загрузка</div>
        </div>
    </template>
    
    
    <style>
    
    </style>