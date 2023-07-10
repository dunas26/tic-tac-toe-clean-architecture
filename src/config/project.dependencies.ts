import { globalContainer } from "./inversify.config";
import { Container } from "inversify";
import { StartNewGame } from "../application/usecases";
import { AppController, GameController } from "../infrastructure/controllers";
import { BoardPersistency } from "../infrastructure/persistency/board.persistency";
import { BoardState } from "../infrastructure/persistency/states";
import { SetPlayingBoard } from "../application/usecases/set-playing-board.usecase";
import { GetCurrentBoard } from "../application/usecases/get-current-board.usecase";

type Constructor = new (...args: any[]) => any;

function dependOn<T extends Constructor>(objectName: string, target: T, container: Container = globalContainer) {
    const token = objectName;
    return container.bind(token).to(target);
}

export const buildDependencies = () => {
    dependOn('AppPort',AppController);
    dependOn('GamePort',GameController);
    dependOn('StartNewGameUseCase', StartNewGame);
    dependOn('SetPlayingBoardUseCase', SetPlayingBoard);
    dependOn('GetCurrentBoardUseCase', GetCurrentBoard);
    dependOn('BoardRepository', BoardPersistency);
    dependOn('BoardStatePort', BoardState);
}

export const dependency = <T>(
    token: string, container: Container = globalContainer
): T | undefined => {
    return container.get(token);
}