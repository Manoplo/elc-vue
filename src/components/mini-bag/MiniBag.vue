<script setup lang="ts">


import { useBagStore } from '@/store/bag-store/useBagStore';
import { toRefs } from 'vue';

const store = useBagStore();
const { minibagOpen, toggleMinibag } = toRefs(store);


</script>

<template>
    <aside :style="{ transform: minibagOpen ? 'translateX(0)' : 'translateX(100%)' }">
        <div class="minibag__container">
            <div class="minibag__header">
                <h2 class="minibag__title">Your bag</h2>
                <button class="minibag__close" @click="toggleMinibag">X</button>
            </div>
            <div class="minibag__content">
                <div class="minibag__empty">
                    <h3 class="minibag__empty-title">Your bag is empty</h3>
                    <p class="minibag__empty-text">Shop now to find your favorite products.</p>
                </div>
            </div>
        </div>
    </aside>
</template>

<style scoped>
aside {
    position: absolute;
    top: 0;
    right: 0;
    width: 33vw;
    height: 100%;
    background-color: #fff;
    z-index: 999;
    transition: transform 0.4s ease;
}
</style>