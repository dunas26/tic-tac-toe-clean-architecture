import { inject, injectable } from "inversify";
import { GamePort } from "../ports/in";
import { BoardModel } from "../../domain/models";
import type { GetCurrentBoardUseCase } from "../../application/usecases/usecase";
import type { GameStatePort } from "../../application/ports/in";
import { Mark } from "../../domain/values/tile.value";

@injectable()
export class GameController implements GamePort {
    constructor(
        @inject('GetCurrentBoardUseCase') private _getCurrentBoard: GetCurrentBoardUseCase,
        @inject('GameStatePort') private gameState: GameStatePort
    ) { }
    getCurrentBoard(): BoardModel {
        return this._getCurrentBoard.do();
    }

    getCurrentMark(): Mark {
        const mark = this.gameState.getCurrentMark();
        this.gameState.switchTurn();
        return mark;
    }

    matchStart(): void {
        this.gameState.matchStart();
    }

    matchStop(winner: Mark): void {
        this.gameState.matchStop(winner);
    }
}