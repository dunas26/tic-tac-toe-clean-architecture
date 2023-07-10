<script setup lang="ts">
import { computed, toRefs } from 'vue';
import { Mark } from '../domain/values/tile.value';

export interface CurrentTurnProps {
    mark: Mark;
}
const props = defineProps<CurrentTurnProps>();
const { mark } = toRefs(props);

const markColor = computed(() => {
    return mark.value == "X" 
    ? "text-red-400"
    : "text-blue-400"
})
</script>
<template>
  <section
    class="flex items-center justify-between p-6 bg-white shadow-md rounded-md border border-terciary/5"
  >
    <span class="text-xl font-semibold text-terciary/30">Current turn: </span>
    <span 
    class="font-extrabold text-2xl"
    :class="markColor">{{ mark }}</span>
  </section>
</template>
