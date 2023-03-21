import { defineStore } from 'pinia'
import { computed, ref, Ref } from 'vue';
import { Product } from '../types/Product';

export const useCartStore = defineStore('cart', () => {
    const items: Ref<Product[]> = ref([]); // state

    const itemsCount = computed(() => items.value.length); // getter

    const groupedItems = computed(() => {
         return items.value.reduce((acc, item) => {
            if (!acc[item.name]) {
                acc[item.name] = [];
            }
            acc[item.name].push(item);
            return acc;
        }, {} as Record<string, Product[]>);
    });

    const addItem = (item: Product) => {
        items.value.push({...item});
    } // action

    const removeItem = (item: Product) => {
        const index = items.value.findIndex(i => i.name === item.name);
        items.value.splice(index, 1);
    } // action

    const $reset = () => {
        items.value = [];
    } // action $reset

    return { items, itemsCount, groupedItems, addItem, removeItem, $reset}
});