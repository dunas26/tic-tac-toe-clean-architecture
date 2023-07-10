import { BoardModel } from "../../../domain/models";
import { Mark } from "../../../domain/values/tile.value";

export interface GamePort {
    getCurrentBoard(): BoardModel;
    getCurrentMark(): Mark;
    matchStart(): void;
    matchStop(winner: Mark | undefined): void;
    markBoardAt(board: BoardModel, index: number): boolean;
    getWinner(board: BoardModel): Mark | undefined;
    stepsLeft(board: BoardModel): number;
    hasWinner(board: BoardModel): boolean;
    hasNoStepsLeft(board: BoardModel): boolean;
    switchTurn(): Mark;
}