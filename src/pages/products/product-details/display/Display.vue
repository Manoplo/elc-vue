<script setup lang="ts">
import PdpImages from './pdp-images/PdpImages.vue';
import PdpBuyingControl from './pdp-buying-control/PdpBuyingControl.vue';
</script>

<template>
    <section>
        <PdpImages />
        <PdpBuyingControl />
    </section>
</template>

<style scoped>
section {
    width: 100%;
    display: grid;
    grid-template-columns: 2fr 1fr;
    grid-gap: 1rem;
    padding: 1rem;
    margin-top: calc(var(--search-bar-height) + var(--promo-banner-height));
}
</style>
