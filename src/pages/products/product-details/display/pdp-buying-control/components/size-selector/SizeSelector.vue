<script setup lang="ts">
import { toRefs, ref } from 'vue';
import { SizeSelectorProps } from './SizeSelector.types';


const props = defineProps<SizeSelectorProps>();

const { sizes } = toRefs(props);

const selectedSize = ref<string | null>(null);
const isSizeDropdownOpen = ref<boolean>(false);

const openDropdown = () => {
    isSizeDropdownOpen.value = !isSizeDropdownOpen.value;
}

const handleSizeClick = (size: string) => {
    selectedSize.value = size;
    isSizeDropdownOpen.value = false;
}




</script>

<template>
    <section>

        <button @click="openDropdown">
            Elige talla
        </button>
        <div class="dropdown" v-if="isSizeDropdownOpen">
            <ul>
                <li v-for="size in sizes" :key="size.name">
                    <button @click="handleSizeClick(size.value)" class="size">
                        {{ size.name }}
                    </button>
                </li>
            </ul>
        </div>
    </section>
</template>

<style scoped>
section {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    position: relative;
}

button {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #fff;
    border: 1px solid #242424;
    color: #797979;
    cursor: pointer;
    font-size: 1.4rem;
    font-weight: 400;
    height: 4.8rem;
    letter-spacing: .64px;
    line-height: 1.313rem;
    padding: 0 1.8rem;
    text-align: center;
    width: 100%;
}

/* button::after {
    content: '';
    display: inline-block;
    width: 0;
    height: 0;
    border-top: 6px solid #242424;
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    margin-left: 1rem;
    transition: all 0.3s ease-in-out;
} */

ul {
    list-style: none;
    margin: 0;
    font-size: 1.4rem;
    font-weight: 400;
    color: #797979;
    padding: 0;

    li {
        cursor: pointer;
        transition: all 0.2s ease-in-out;
    }

    li:hover {
        background-color: #ebebeb;
    }
}

.size {
    padding: 1rem 1.8rem;
    outline: none;
    border: none;
    background-color: transparent;
}

.dropdown {
    position: absolute;
    top: 90%;
    left: 0;
    width: 100%;
    background-color: #fff;
    border: 1px solid #242424;
    border-top: none;
    z-index: 1;
}
</style>