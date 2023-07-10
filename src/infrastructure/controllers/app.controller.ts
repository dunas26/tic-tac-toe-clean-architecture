import { inject, injectable } from "inversify";
import { SetPlayingBoard, StartNewGame } from "../../application/usecases";
import { BoardModel } from "../../domain/models";
import { AppPort } from "../ports/in/app.port";
import type { BoardStatePort, StoragePort } from "../../application/ports/in";

@injectable()
export class AppController implements AppPort {
    constructor(
        @inject('StartNewGameUseCase') private _startNewGame: StartNewGame,
        @inject('SetPlayingBoardUseCase') private setPlayingBoard: SetPlayingBoard,
        @inject('BoardStatePort') private boardState: BoardStatePort,
        @inject('StoragePort') private storage: StoragePort
    ) { };

    public startNewGame(): BoardModel {
        const board = this._startNewGame.do();
        this.setPlayingBoard.do(board);
        return board;
    }

    public getCurrentBoardId(): string | undefined {
        if(!this.boardState) return undefined;
        return this.boardState.getCurrentBoard().id;
    }

    public canLoadBoard(id: string): boolean {
        return this.storage.has(`board_${id}`);
    }

    public loadStoredBoard(id: string): BoardModel | null {
        return this.storage.load(`board_${id}`);
    }
}