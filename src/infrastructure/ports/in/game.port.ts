import { BoardModel } from "../../../domain/models";
import { Mark } from "../../../domain/values/tile.value";

export interface GamePort {
    getCurrentBoard(): BoardModel;
    getCurrentMark(): Mark;
    matchStart(): void;
    matchStop(winner: Mark): void;
}