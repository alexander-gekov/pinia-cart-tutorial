<template>
    <div class="absolute top-20 right-0 w-1/3 p-4 border rounded-lg bg-white border-gray-300">
          <h1 class="text-xl font-bold">My Cart</h1>
          <ul>
            <li v-for="[name, items] in Object.entries(cartStore.groupedItems)" :key="name">
              <div class="flex items-center justify-between py-2">
                <span>{{name}}</span>
                <div class="flex items-center">
                  <button @click="cartStore.removeItem(items[0])" class="hover:bg-gray-200 rounded-full p-2">
                  -
                </button>
                <span class="mx-2">{{ items.length }}</span>
                <button @click="cartStore.addItem(items[0])" class="hover:bg-gray-200 rounded-full p-2">
                  +
                </button>
                </div>
                <span>${{items.map(i => i.price).reduce((totalItemPrice, price) => totalItemPrice + price, 0)}}</span>
              </div>
            </li>
          </ul>
          <hr class="my-2">
          <div class="flex items-center justify-between">
            <span class="font-bold">Total</span>
            <span class="font-bold">${{ cartStore.items.map(p => p.price).reduce((acc,curr) => acc + curr, 0) }}</span>
          </div>
        </div>  
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useCartStore } from '../stores/CartStore';

const cartStore = useCartStore();
</script>