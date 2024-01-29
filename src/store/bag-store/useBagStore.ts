import { defineStore } from "pinia";
import { ref } from "vue";
import { BagItem, BagStore } from "./BagStore.types";

export const useBagStore = defineStore('bag', () : BagStore => {
    const minibagOpen = ref(false);
    const bagItems = ref<BagItem[]>([]);
    const total = ref(0);

    
    const toggleMinibag = () => {
        minibagOpen.value = !minibagOpen.value;
    }

    const addBagItem = (item: BagItem) => {
        const existingItem = bagItems.value.find(bagItem => bagItem.id === item.id);
        if(existingItem) {
            existingItem.quantity += 1;
        } else {
            bagItems.value.push(item);
        }
        total.value += item.price;
    }

    const removeBagItem = (id: number | string) => {
        const existingItem = bagItems.value.find(bagItem => bagItem.id === id);
        if(existingItem) {
            if(existingItem.quantity > 1) {
                existingItem.quantity -= 1;
            } else {
                bagItems.value = bagItems.value.filter(bagItem => bagItem.id !== id);
            }
            total.value -= existingItem.price;
        }
    }

    return {
        minibagOpen,
        total,
        bagItems,
        toggleMinibag,
        addBagItem,
        removeBagItem,
    }
    

})