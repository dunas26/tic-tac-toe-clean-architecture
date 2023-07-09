import { inject } from "inversify";
import { BoardState } from "../../infrastructure/persistency/states";
import { BoardModel } from "../../domain/models";
import { SetPlayingBoardUseCase } from "./usecase";

export class SetPlayingBoard implements SetPlayingBoardUseCase {
    constructor(
        @inject('BoardStatePort') private boardState: BoardState
    ) { };

    public do(board: BoardModel) {
        this.boardState.setCurrentBoard(board);
    }
}