<script setup lang="ts">
import SearchInput from '../../../components/search/SearchInput.vue';
import UserIcon from '@/assets/icons/user.svg?component';
import FavIcon from '@/assets/icons/heart.svg?component';
import BagIcon from '@/assets/icons/shopping-bag.svg?component';
import { useBagStore } from '@/store/bag-store/useBagStore';

const bagStore = useBagStore();

const toggleMinibag = bagStore.toggleMinibag;

</script>

<template>
    <nav>
        <div class="pdp_nav__logo_container">
            <button class="pdp_nav__button">
                X
            </button>
            <DynamicLogo />
        </div>
        <div class="pdp_nav__search_container">
            <SearchInput />
        </div>
        <div class="pdp_nav__icons_container">
            <UserIcon />
            <FavIcon />
            <BagIcon @click="toggleMinibag" />
        </div>
    </nav>
</template>

<style scoped>
.pdp_nav__logo_container {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-left: 2.4rem;
}

.pdp_nav__search_container {
    display: flex;
    align-items: center;
    justify-content: center;
}

.pdp_nav__icons_container {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 2rem;
    margin-right: 2.4rem;
}

svg {
    cursor: pointer;
}


nav {
    position: fixed;
    top: calc(var(--promo-banner-height) + 2rem);
    left: 0;
    width: 100%;
    min-height: var(--search-bar-height);
    background-color: white;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    padding: 0 1rem;
    z-index: var(--navigation);
}

button {
    background-color: transparent;
    border: none;
    outline: none;
    cursor: pointer;
    font-size: 2.4rem;
}
</style>@/store/ui-store/useBagStore