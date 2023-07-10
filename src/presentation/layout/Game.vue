<script setup lang="ts">
import { computed, onMounted, onBeforeMount, ref } from "vue";
import { useRouter } from "vue-router";
import Button from "../ui/Button.vue";
import Board from "../Board.vue";
import Timer from "../Timer.vue";
import { dependency } from "../../config/project.dependencies";
import { GameController } from "../../infrastructure/controllers";
import { BoardModel } from "../../domain/models";
import CurrentTurn from "../CurrentTurn.vue";
import Winner from "../Winner.vue";

const controller = dependency<GameController>("GamePort");
const board = ref<BoardModel | undefined>(undefined);
const router = useRouter();

const timer = ref<InstanceType<typeof Timer> | null>(null);

onBeforeMount(() => {
  board.value = controller?.getCurrentBoard();
  if (!board.value) router.push({ name: "home" });
});

onMounted(() => {
  controller?.matchStart();
});

const nextMark = computed(() => {
  return controller?.getCurrentMark();
});

const hasWinner = computed(() => {
  if (!board.value) return false;
  return controller?.getWinner(board.value as BoardModel);
});

const winner = computed(() => {
  if (!board.value) return;
  return controller?.getWinner(board.value as BoardModel);
});

const hasStepsLeft = computed(() => {
  if (!board.value || !controller) return;
  return controller?.stepsLeft(board.value as BoardModel) > 0;
});

function onTileClick(index: number) {
  const mark = controller?.getCurrentMark();
  if (!mark || !board.value) return;

  if (!timer.value?.hasStarted) timer.value?.start();
  const boardMarked = controller?.markBoard(
    board.value as BoardModel,
    index,
    mark
  );
  if (!boardMarked) return;

  const stepsLeft = controller?.stepsLeft(board.value as BoardModel) ?? 9;
  if (stepsLeft <= 0) {
    controller?.matchStop(undefined);
    timer.value?.stop();
    return;
  }

  controller?.switchTurn();
  if (hasWinner.value) {
    console.log("STOP");
    timer.value?.stop();
  }
}

function quitGame() {
  router.push("/home");
}
</script>
<template>
  <main class="flex flex-col w-full h-full">
    <header class="p-12">
      <section class="mb-6">
        <span class="flex justify-center">
          <p class="text-terciary/40">Timer</p>
        </span>
        <Timer ref="timer" />
      </section>
      <CurrentTurn
        v-if="hasStepsLeft && !hasWinner && nextMark"
        :mark="nextMark"
      />
      <Winner v-else :winner="winner" />
    </header>
    <section class="flex-1 mt-14">
      <Board
        v-if="board"
        :board="(board as BoardModel)"
        @tile-click="onTileClick($event)"
      />
    </section>
    <footer class="flex flex-col mb-24 px-12 w-full">
      <Button label="quit" @button-click="quitGame" />
    </footer>
  </main>
</template>
