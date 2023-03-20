<template>
    <nav class="border border-gray-300 rounded-xl rounded-t-none p-4 mb-10">
      <div class="container flex items-center justify-between">
        <h2 class="font-bold text-2xl w-1/3">Pinia Cart Tutorial</h2>
        <div class="w-1/3">
          <img class="w-12" src="/pinia.png" alt="">
        </div>
        <button @click="$emit('toggleCart')" class="hover:bg-gray-200 rounded-full p-2">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
          </svg>
        </button>
      </div>
    </nav>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

defineProps({
    products: {
        type: Array,
        default: () => []
    },
    showCart: {
        type: Boolean,
        default: false
    },
})
</script>