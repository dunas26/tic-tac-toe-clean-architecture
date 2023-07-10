import { inject, injectable } from "inversify";
import { BoardState } from "../../infrastructure/persistence/states";
import { BoardModel } from "../../domain/models";
import { SetPlayingBoardUseCase } from "./usecase";

@injectable()
export class SetPlayingBoard implements SetPlayingBoardUseCase {
    constructor(
        @inject('BoardStatePort') private boardState: BoardState
    ) { };

    public do(board: BoardModel) {
        this.boardState.setCurrentBoard(board);
    }
}