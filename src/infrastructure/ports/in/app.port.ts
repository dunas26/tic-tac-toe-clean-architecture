import { BoardModel } from "../../../domain/models";

export interface AppPort {
    startNewGame(): BoardModel;
}