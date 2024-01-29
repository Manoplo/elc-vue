<script setup lang="ts">
import { ref } from 'vue';
import ColorSwatch from '../../../../../components/color-swatch/ColorSwatch.vue'
import data from './data.ts';
import { PageType } from '../../../../../global-constants'

const color = ref(data.priceWithDiscount ? '#e21e04' : 'black');

</script>

<template>
    <aside>
        <div class="pdp_buying_container">
            <h2>{{ data.name }}</h2>
            <div class="price_container">
                <span class="price">
                    {{ data.priceWithDiscount ? data.priceWithDiscount : data.price }}
                </span>
                <span class="lined-price" v-if="data.priceWithDiscount">
                    {{ data.price }}
                </span>
                <span class="discount" v-if="data.discount">
                    {{ data.discount }}
                </span>
            </div>
            <div class="promotions" v-if="data.promotions">
                {{ data.promotions }}
            </div>
            <div v-if="data.colors.length" class="color-swatch">
                <ColorSwatch :colors="data.colors" :from="PageType.PDP" />
            </div>

        </div>
    </aside>
</template>

<style scoped>
h2 {
    font-size: 1.8rem;
    font-weight: 400;
    margin-bottom: 4rem;
    color: #242424;
    letter-spacing: .64px;
    line-height: 1.313rem;
}

aside {
    display: flex;
    flex-direction: column;
    padding-inline: 3.2rem;
}

.pdp_buying_container {
    position: sticky;
    top: calc(var(--search-bar-height) + var(--promo-banner-height) + 1rem);
    padding-top: 1rem;
    z-index: var(--sticky-buying-control);
}

.price_container {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 0.8rem;

}

.price {
    font-size: 1.8rem;
    font-weight: 400;
    letter-spacing: .64px;
    line-height: 1.313rem;
    color: v-bind(color);
}

.lined-price {
    font-size: 1.4rem;
    font-weight: 400;
    letter-spacing: .64px;
    line-height: 1.313rem;
    color: #242424;
    text-decoration: line-through;
}

.discount {
    font-size: 1.4rem;
    font-weight: 400;
    letter-spacing: .64px;
    line-height: 1.313rem;
    color: #e21e04;
}

.promotions {
    font-size: 1.4rem;
    font-weight: 400;
    letter-spacing: .64px;
    line-height: 1.313rem;
    color: #00862d;
    margin-top: 1.6rem;
    margin-bottom: 2.4rem;
}
</style>


