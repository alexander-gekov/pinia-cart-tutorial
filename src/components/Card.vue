<template>
    <div class="w-full max-w-sm flex flex-col justify-between mx-1 text-black bg-white border border-gray-200 rounded-lg shadow">
        <img class="p-8 rounded-t-lg" :src="product.image" alt="product image" />
        <div class="px-5 pb-5">
            <h5 class="text-xl font-semibold tracking-tight text-gray-900">{{product.name}}</h5>
            <div class="flex items-center justify-between">
                <span class="text-3xl font-bold text-gray-900 ">${{product.price}}</span>
                <button @click="$emit('addToCart', product)" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Add to cart</button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
defineProps<{
  product: {name: string, price: number, image: string}
}>()

defineEmits(['addToCart'])
</script>