import { Ref } from "vue";

export type BagStore = {
    minibagOpen: Ref<boolean>;
    bagItems: Ref<BagItem[]>;
    total: Ref<number>;
    toggleMinibag: () => void;
    addBagItem: (item: BagItem) => void;
    removeBagItem: (id: number | string) => void;
}

export type BagItem = {
    id: number | string;
    name: string;
    price: number;
    quantity: number;
    image: string;
}