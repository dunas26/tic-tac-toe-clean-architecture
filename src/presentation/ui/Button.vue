<script setup lang="ts">
import { computed, toRefs } from "vue";
export interface ButtonProps {
  label: string;
  buttonStyle: "main" | "secondary";
}

const props = withDefaults(defineProps<ButtonProps>(), {
    buttonStyle: "main"
});
const { label, buttonStyle } = toRefs(props);

defineEmits(['buttonClick']);

const colorStyles = computed(() => {
  return buttonStyle.value == "main"
    ? "bg-secondary-500 text-primary focus:outline-primary border-transparent"
    : "bg-primary text-secondary-500 focus:outline-secondary-500 border-secondary-500 focus:border-transparent";
});
</script>
<template>
  <button
    :class="colorStyles"
    class="relative rounded-md px-3 py-2 border shadow-sm overflow-hidden transition-[shadow,_transform,_color,_outline-color] hover:shadow-md hover:translate-y-[-2px] active:translate-y-[2px] outline outline-2 -outline-offset-4 outline-transparent active:shadow-none before:transition-[background-color] before:contents before:inset-0 before:absolute before:bg-transparent active:before:bg-black/20"
    @click="$emit('buttonClick')"
  >
    {{ label }}
  </button>
</template>