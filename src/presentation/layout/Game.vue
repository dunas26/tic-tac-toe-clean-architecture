<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { dependency } from '../../config/project.dependencies';
import { GameController } from '../../infrastructure/controllers';
import Button from '../ui/Button.vue';
import { BoardModel } from '../../domain/models';
import { useRouter } from 'vue-router';

const controller = dependency<GameController>('GamePort');
const board = ref<BoardModel | undefined>(undefined);
const router = useRouter();

onMounted(() => {
    board.value = controller?.getCurrentBoard();
    if(!board.value) router.push({ name: 'home' });
})

</script>
<template>
    <main class="flex flex-col w-full h-full">
        <section class="flex-1">
            
        </section>
        <footer class="flex flex-col mb-24 px-12 w-full">
            <Button label="quit" />
        </footer>
    </main>
</template>