<script setup lang="ts">
import { ref } from 'vue';
import Card from './components/Card.vue';
import Cart from './components/Cart.vue';
import NavBar from './components/NavBar.vue';

const showCart = ref(false);

const products = [
  {
    name: 'Bananas',
    price: 5,
    image: 'https://img.freepik.com/free-vector/vector-ripe-yellow-banana-bunch-isolated-white-background_1284-45456.jpg'
  },
  {
    name: 'Strawberries',
    price: 10,
    image: 'https://img.freepik.com/free-photo/strawberry-berry-levitating-white-background_485709-57.jpg?w=2000'
  },
  {
    name: 'Apples',
    price: 15,
    image: 'https://img.freepik.com/premium-photo/red-apples-isolated-white-background-ripe-fresh-apples-clipping-path-apple-with-leaf_299651-595.jpg'
  }
]

</script>

<template>
  <div class="relative max-w-6xl mx-auto">
    <NavBar :products="products" :show-cart="showCart" @toggleCart="showCart = !showCart"/>
    <Cart v-if="showCart" :products="products"/>
    <main class="flex flex-1">
      <Card v-for="product in products" :key="product.name" :product="product"/>
    </main>
  </div>
</template>

<style scoped>
</style>
