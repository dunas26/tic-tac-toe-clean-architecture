import { computed, ref } from "vue";
import { BoardModel } from "../../domain/models";
import { GamePort } from "../ports/in";

export function useGameReport(port: GamePort) {
    
    const board = ref<BoardModel | undefined>(port.getCurrentBoard());

    const nextMark = computed(() => {
        return port?.getCurrentMark();
    });

    const hasWinner = computed(() => {
        if (!board.value) return false;
        return port?.getWinner(board.value as BoardModel);
    });

    const winner = computed(() => {
        if (!board.value) return;
        return port?.getWinner(board.value as BoardModel);
    });

    const hasStepsLeft = computed(() => {
        if (!board.value || !port) return;
        return port?.stepsLeft(board.value as BoardModel) > 0;
    });

    return {
        nextMark,
        hasWinner,
        winner,
        hasStepsLeft
    }
}