<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';
import Button from '../ui/Button.vue';
import Board from '../Board.vue';
import { dependency } from '../../config/project.dependencies';
import { GameController } from '../../infrastructure/controllers';
import { BoardModel } from '../../domain/models';

const controller = dependency<GameController>('GamePort');
const board = ref<BoardModel | undefined>(undefined);
const router = useRouter();

onMounted(() => {
    board.value = controller?.getCurrentBoard();
    if(!board.value) router.push({ name: 'home' });
    controller?.matchStart();
})

function onTileClick(index: number) {
    const mark = controller?.getCurrentMark();
    if(!mark) return;
    board.value?.mark(index, mark);
}

</script>
<template>
    <main class="flex flex-col w-full h-full">
        <section class="flex-1">
            <Board v-if="board" :board="(board as BoardModel)" @tile-click="onTileClick($event)"/>
        </section>
        <footer class="flex flex-col mb-24 px-12 w-full">
            <Button label="quit" />
        </footer>
    </main>
</template>