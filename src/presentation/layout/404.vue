<script setup lang="ts">
import { useRouter } from "vue-router";
import Button from "../ui/Button.vue";
import { onMounted } from "vue";

const router = useRouter();

onMounted(() => router.replace("/not-found"));
function toHome() {
  router.push("/home");
}
</script>
<template>
  <h1 class="font-bold text-6xl mt-[10rem] text-center text-secondary-600">
    404
  </h1>
  <span class="mt-4 h-6">
    <p class="text-terciary/40">Route has not been found</p>
  </span>
  <section class="flex flex-col flex-1 w-full gap-4 px-12 mt-[20rem]">
    <Button @buttonClick="toHome()" label="navigate to home" />
  </section>
  <footer class="h-auto p-8">
    <p>Copyright &copy; John James Valencia</p>
  </footer>
</template>
