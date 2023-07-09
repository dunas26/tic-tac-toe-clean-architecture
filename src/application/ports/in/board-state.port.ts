import { BoardModel } from "../../../domain/models";

export interface BoardStatePort {
    setCurrentBoard(board: BoardModel): void;
}