<script setup lang="ts">
import Button from './presentation/ui/Button.vue';

function onButtonClick(buttonName: string) {
  console.log(buttonName, "was clicked");
}

</script>
<template>
  <main class="max-w-md md:my-2 md:border-2 border-terciary/10 rounded-lg flex flex-col mx-auto justify-start items-center bg-primary h-full">
    <h1 class="font-bold text-6xl mt-[10rem] text-center text-secondary-600">Tic tac toe</h1>
    <section class="flex flex-col flex-1 w-full gap-4 px-12 mt-[20rem]">
      <Button @buttonClick="onButtonClick('Start game')" label="start game"/>
      <Button @buttonClick="onButtonClick('Continue')" label="Continue" buttonStyle="secondary"/>
    </section>
    <footer class="h-auto p-8">
      <p>Copyright &copy; John James Valencia</p>
    </footer>
  </main>
</template>
