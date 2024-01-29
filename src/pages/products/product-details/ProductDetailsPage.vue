<script setup lang="ts">
import PromoBanner from '../../../components/promo-banner/PromoBanner.vue';
import ProductsHeader from '../products-header/ProductsHeader.vue';
import Display from './display/Display.vue';
</script>

<template>
    <main>
        <PromoBanner msg="REBAJAS -20% ADICIONAL* | Del 25 de enero al 4 de febrero. ¡YA EN WEB Y APP!" />
        <ProductsHeader />
        <Display />
        <div class="carousel-section">
            <h2>Carousel</h2>
        </div>

    </main>
</template>

<style scoped>
div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100rem;
}
</style>