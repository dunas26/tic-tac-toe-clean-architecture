import { inject, injectable } from "inversify";

import { BoardModel } from "../domain/models";
import { StartNewGame } from "../usecases/";

@injectable()
export class AppController {
    constructor(
        @inject(StartNewGame.name) private startNewGameUseCase?: StartNewGame
    ) { };

    public startNewGame(): BoardModel {
        return this.startNewGameUseCase?.do() as any;
    }
}