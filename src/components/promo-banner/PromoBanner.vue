<script setup lang="ts">
defineProps<{ msg: string }>()
</script>

<template>
    <div class="promo_banner__wrapper">
        <p>{{ msg }}</p>
    </div>
</template>

<style scoped>
.promo_banner__wrapper {
    width: 100%;
    height: var(--promo-banner-height);
    position: fixed;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 1.6rem;
    top: 0;
    left: 0;
    background-color: red;
    padding: 2rem;
    display: flex;
    z-index: var(--promo-banner);
}
</style>