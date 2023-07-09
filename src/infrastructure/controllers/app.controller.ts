import { inject, injectable } from "inversify";
import { StartNewGame } from "../../usecases";
import { BoardModel } from "../../domain/models";
import { AppPort } from "../ports/in/app.port";

@injectable()
export class AppController implements AppPort {
    constructor(
        @inject(StartNewGame.name) private startNewGameUseCase: StartNewGame
    ) { };

    public startNewGame(): BoardModel {
        const board = this.startNewGameUseCase.do();
        return board;
    }
}