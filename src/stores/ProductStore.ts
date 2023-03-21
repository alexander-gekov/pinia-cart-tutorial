import { defineStore } from "pinia";
import { computed, ref, Ref } from "vue";
import { Product } from "../types/Product";

export const useProductStore = defineStore('products', () => {
    const products: Ref<Product[]> = ref([
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
      ]); // ref = state

    const totalPrice = computed(
        () => products.value
        .map(p => p.price)
        .reduce((a, b) => a + b, 0)
    ); // computed = getter

    const addProduct = (product: Product) => {
        products.value.push(product);
    } // method = action

    return {
        products,
        totalPrice,
        addProduct
    }
})