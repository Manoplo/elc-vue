<script setup lang="ts">
import { images } from './data.ts';
</script>

<template>
    <div class="pdp_images__container">
        <img v-for="image in images" :key="image.url" :src="image.url" />
    </div>
</template>

<style scoped>
.pdp_images__container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: .5rem;
}

img {
    width: 100%;
    aspect-ratio: 2/3;
    object-fit: cover;
}
</style>


