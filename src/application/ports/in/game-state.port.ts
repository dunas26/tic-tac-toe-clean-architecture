import { Mark } from "../../../domain/values/tile.value";

export interface GameStatePort {
    getCurrentMark(): Mark;
    getStartTime(): number;
    getEndTime(): number;
    matchStart(): void;
    matchStop(winner: Mark): void;
    switchTurn(): Mark;
}