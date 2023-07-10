import { inject, injectable } from "inversify";
import { GamePort } from "../ports/in";
import { BoardModel } from "../../domain/models";
import type { GetCurrentBoardUseCase } from "../../application/usecases/usecase";

@injectable()
export class GameController implements GamePort {
    constructor(
        @inject('GetCurrentBoardUseCase') private _getCurrentBoard: GetCurrentBoardUseCase
    ) { }
    getCurrentBoard(): BoardModel {
        return this._getCurrentBoard.do();
    }

}