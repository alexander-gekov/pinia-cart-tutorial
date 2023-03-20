<template>
    <div class="absolute top-20 right-0 w-1/3 p-4 border rounded-lg bg-white border-gray-300">
          <h1 class="text-xl font-bold">My Cart</h1>
          <ul>
            <li v-for="product in products" :key="product.name">
              <div class="flex items-center justify-between py-2">
                <span>{{product.name}}</span>
                <div class="flex items-center">
                  <button class="hover:bg-gray-200 rounded-full p-2">
                  -
                </button>
                <span class="mx-2">1</span>
                <button class="hover:bg-gray-200 rounded-full p-2">
                  +
                </button>
                </div>
                <span>${{product.price}}</span>
              </div>
            </li>
          </ul>
          <hr class="my-2">
          <div class="flex items-center justify-between">
            <span class="font-bold">Total</span>
            <span class="font-bold">${{ products.map(p => p.price).reduce((acc,curr) => acc + curr, 0) }}</span>
          </div>
        </div>  
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

defineProps<{
  products: {name: string, price: number, image: string}[]
}>()
</script>