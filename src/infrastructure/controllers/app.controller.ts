import { inject, injectable } from "inversify";
import { StartNewGame } from "../../application/usecases";
import { BoardModel } from "../../domain/models";
import { AppPort } from "../ports/in/app.port";
import { SetPlayingBoard } from "../../application/usecases/set-playing-board.usecase";
import type { BoardStatePort } from "../../application/ports/in";

@injectable()
export class AppController implements AppPort {
    constructor(
        @inject('StartNewGameUseCase') private _startNewGame: StartNewGame,
        @inject('SetPlayingBoardUseCase') private setPlayingBoard: SetPlayingBoard,
        @inject('BoardStatePort') private boardState: BoardStatePort,
    ) { };

    public startNewGame(): BoardModel {
        const board = this._startNewGame.do();
        this.setPlayingBoard.do(board);
        return board;
    }

    public getCurrentBoardId(): string {
        return this.boardState.getCurrentBoard().id;
    }
}