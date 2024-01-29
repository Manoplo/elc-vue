<script setup lang="ts">
import { ref } from 'vue';

import SearchIcon from '../../assets/icons/search.svg?component';
import MicIcon from '../../assets/icons/mic.svg?component';

const isModalOpen = ref(false);
const searchQuery = ref('');

const handleClearQuery = () => {
    console.log('close')
    searchQuery.value = '';
    isModalOpen.value = false;
}



</script>

<template>
    <search>
        <form>
            <button type="button">
                <SearchIcon width="20" />
            </button>
            <input @click="isModalOpen = true" v-model="searchQuery" type="text" placeholder="¿Qué estás buscando?" />
            <button v-if="!isModalOpen" type="button">
                <MicIcon width="24" />
            </button>
            <button @click="handleClearQuery" v-else>
                <span>X</span>
            </button>
        </form>
    </search>
    <div class="typeahead" v-if="isModalOpen">
        <div class="modal"></div>
        <button class="backdrop" @onClick="handleClearQuery"></button>
    </div>
</template>


<style scoped>
form {
    border: 1px solid rgb(133, 133, 133);
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
}

input {
    width: 100%;
    height: 100%;
    border: none;
    outline: none;
    font-size: 1.6rem;
    padding: 0.8rem 4.8rem;
}

button {
    display: flex;
    place-items: center;
    font-size: 1.6rem;
    border: none;
    outline: none;
    background-color: transparent;
    padding: 0 1rem;
    cursor: pointer;
}

.typeahead {
    position: absolute;
    display: flex;
    flex-direction: column;
    top: 100%;
    left: 0;
    width: 100%;
    height: 100vh;
    z-index: var(--typeahead);

}

.modal {
    width: 100%;
    height: 25%;
    background-color: white;
    box-shadow: var(--shadow-elevation-medium);
}

.backdrop {
    width: 100%;
    height: 75%;
    background-color: rgba(0, 0, 0, 0.2);
}
</style>