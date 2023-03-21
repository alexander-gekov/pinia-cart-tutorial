<script setup lang="ts">
import { ref } from 'vue';
import Card from './components/Card.vue';
import Cart from './components/Cart.vue';
import NavBar from './components/NavBar.vue';
import { useProductStore } from './stores/ProductStore';
import { useCartStore } from './stores/CartStore';

const showCart = ref(false);

const productStore = useProductStore();
const cartStore = useCartStore();

</script>

<template>
  <div class="relative max-w-6xl mx-auto">
    <NavBar :show-cart="showCart" @toggleCart="showCart = !showCart"/>
    <Cart v-if="showCart"/>
    <main class="flex flex-1">
      <Card v-for="product in productStore.products" :key="product.name" :product="product" @add-to-cart="cartStore.addItem"/>
    </main>
  </div>
</template>

<style scoped>
</style>
