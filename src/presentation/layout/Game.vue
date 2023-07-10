<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';
import Button from '../ui/Button.vue';
import Board from '../Board.vue';
import { dependency } from '../../config/project.dependencies';
import { GameController } from '../../infrastructure/controllers';
import { BoardModel } from '../../domain/models';
import CurrentTurn from '../CurrentTurn.vue';

const controller = dependency<GameController>('GamePort');
const board = ref<BoardModel | undefined>(undefined);
const router = useRouter();

onMounted(() => {
    board.value = controller?.getCurrentBoard();
    if(!board.value) router.push({ name: 'home' });
    controller?.matchStart();
})

const nextMark = computed(() => {
    return controller?.getCurrentMark();
});

const hasWinner = computed(() => {
    if(!board.value) return false;
    return controller?.getWinner(board.value as BoardModel);
});

function onTileClick(index: number) {
    const mark = controller?.getCurrentMark();
    if(!mark || !board.value) return;

    const boardMarked = controller?.markBoard(board.value as BoardModel, index, mark);
    if(!boardMarked) return;

    const stepsLeft = controller?.stepsLeft(board.value as BoardModel) ?? 9;
    if(stepsLeft <= 0) {
        controller?.matchStop(undefined);
        return;
    };

    controller?.switchTurn();
    controller?.getWinner(board.value as BoardModel);
}

function quitGame() {
    router.push('/home');
}

</script>
<template>
    <main class="flex flex-col w-full h-full">
        <header class="p-12">
            <CurrentTurn v-if="!hasWinner && nextMark" :mark="nextMark" />
        </header>
        <section class="flex-1">
            <Board v-if="board" :board="(board as BoardModel)" @tile-click="onTileClick($event)"/>
        </section>
        <footer class="flex flex-col mb-24 px-12 w-full">
            <Button label="quit" @button-click="quitGame" />
        </footer>
    </main>
</template>