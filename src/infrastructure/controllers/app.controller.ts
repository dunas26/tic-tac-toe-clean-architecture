import { inject, injectable } from "inversify";
import { StartNewGame } from "../../application/usecases";
import { BoardModel } from "../../domain/models";
import { AppPort } from "../ports/in/app.port";
import { SetPlayingBoard } from "../../application/usecases/set-playing-board.usecase";

@injectable()
export class AppController implements AppPort {
    constructor(
        @inject(StartNewGame.name) private _startNewGame: StartNewGame,
        @inject(SetPlayingBoard.name) private setPlayingBoard: SetPlayingBoard
    ) { };

    public startNewGame(): BoardModel {
        const board = this._startNewGame.do();
        this.setPlayingBoard.do(board);
        return board;
    }
}