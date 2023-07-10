import { injectable } from "inversify";
import { GameStatePort } from "../../../application/ports/in";
import { Mark } from "../../../domain/values/tile.value";
import { useGameStore } from "../stores/game.store";

@injectable()
export class GameState implements GameStatePort {

    private store = useGameStore();

    getCurrentMark(): Mark { return this.store.currentMark; }
    getStartTime(): number { return this.store.endTime ?? -1; }
    getEndTime(): number { return this.store.startTime ?? -1; }
    matchStart(): void { this.store.matchStart(); }
    matchStop(winner: Mark): void { this.store.matchStop(winner); }
    switchTurn(): Mark { return this.store.switchTurn(); }

}