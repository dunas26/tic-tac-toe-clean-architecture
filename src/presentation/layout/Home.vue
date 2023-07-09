<script setup lang="ts">
import { ref } from "vue";
import { dependency } from "../../config/project.dependencies";
import { AppController } from "../../infrastructure/controllers/app.controller";
import Button from "../ui/Button.vue";
import Title from "../ui/Title.vue";

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
  <Title label="Tic tac toe" />
  <span class="mt-4 h-6">
    <p v-if="boardId" class="text-terciary/40">Playing board: #{{ boardId }}</p>
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
</template>
