<script setup lang="ts">
import { toRefs, ref } from 'vue';
import { Color, ColorSwatchProps } from './ColorSwatch.types';
import { PageType } from '../../global-constants';

const props = defineProps<ColorSwatchProps>();

const { colors, from } = toRefs(props);

const isPdp = from.value === PageType.PDP;


const colorName = ref<string | null>(null);
const selectedColor = ref<string | null>(null);


const handleColorClick = (color: Color) => {
    colorName.value = color?.name;
    selectedColor.value = color?.name;
}


</script>


<template>
    <div>
        <span v-if="isPdp">{{ colorName?.toUpperCase() ?? colors?.[0]?.name.toUpperCase() }}</span>
        <div class="container">
            <div @mouseenter="colorName = color.name" @mouseleave="colorName = selectedColor"
                @click="handleColorClick(color)" v-for="color in colors" :key="color.name" class="button-container"
                :class="{ active: selectedColor === color?.name ?? colors?.[0]?.name }">
                <button :style="{ backgroundColor: color.value }"></button>
            </div>
        </div>
    </div>
</template>

<style scoped>
.container {
    display: flex;
    gap: 1rem;
}

span {
    font-size: 1.3rem;
    font-weight: 400;
    color: #242424;
    letter-spacing: .64px;
    line-height: 1.313rem;
}

.button-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 3.2rem;
    height: 3.2rem;
    border-radius: 50%;
    margin-top: 1rem;
    transition: all 0.3s ease-in-out;
    border: 1px solid transparent;
}

.button-container:hover {
    border: 1px solid #242424;
}


.active {
    border: 1px solid #242424;
}

button {
    width: 2.4rem;
    height: 2.4rem;
    border-radius: 50%;
    border: none;
    outline: none;
    cursor: pointer;

}


.selected {
    border: 1px solid #242424;
}

.selected {
    border: 2px solid #242424;
}
</style>