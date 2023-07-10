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
        return this.gameState.getCurrentMark();
    }

    switchTurn(): Mark {
        return this.gameState.switchTurn();
    }

    matchStart(): void {
        this.gameState.matchStart();
    }

    matchStop(winner: Mark | undefined): void {
        this.gameState.matchStop(winner);
    }

    markBoard(board: BoardModel, index: number, mark: Mark): boolean {
        return board.mark(index, mark);
    }

    getWinner(board: BoardModel): Mark | undefined {
        return board.getWinner();
    }

    stepsLeft(board: BoardModel) {
        return board.getStepsLeft();
    }
}