import { injectable } from "inversify";
import { StartNewGameUseCase } from "./definitions/start-new-game.interface";

@injectable()
export class StartNewGame implements StartNewGameUseCase {
    public do() {
        console.log("Creating new game");
    }
}