import { computed, ref } from "vue";
import { GameController } from "../controllers";
import { BoardModel } from "../../domain/models";

export function useGameReport(controller: GameController) {
    
    const board = ref<BoardModel | undefined>(controller.getCurrentBoard());

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

    return {
        nextMark,
        hasWinner,
        winner,
        hasStepsLeft
    }
}