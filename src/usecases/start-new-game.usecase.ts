import { injectable } from "inversify";
import { StartNewGameUseCase } from "./usecase";

@injectable()
export class StartNewGame implements StartNewGameUseCase {
    public do() {
        console.log("Creating new game");
    }
}