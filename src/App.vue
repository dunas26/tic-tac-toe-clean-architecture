<script setup lang="ts">
import { ref } from "vue";
import { dependency } from "./config/project.dependencies";
import { AppController } from "./infrastructure/controllers";
import Button from "./presentation/ui/Button.vue";

const controller = dependency(AppController);
const boardId = ref<string | undefined>(undefined);

function startGame() {
  boardId.value = controller?.startNewGame().id;
}

function continueGame() {
  throw new Error("Not implemented");
}
</script>
<template>
  <main
    class="max-w-md md:my-2 md:border-2 border-terciary/10 rounded-lg flex flex-col mx-auto justify-start items-center bg-primary h-full"
  >
    <h1 class="font-bold text-6xl mt-[10rem] text-center text-secondary-600">
      Tic tac toe
    </h1>
    <span class="text-terciary/40 mt-4" v-if="boardId">
      Playing board: #{{ boardId }}
    </span>
    <section class="flex flex-col flex-1 w-full gap-4 px-12 mt-[20rem]">
      <Button @buttonClick="startGame()" label="start game" />
      <Button
        @buttonClick="continueGame()"
        label="continue"
        buttonStyle="secondary"
      />
    </section>
    <footer class="h-auto p-8">
      <p>Copyright &copy; John James Valencia</p>
    </footer>
  </main>
</template>
