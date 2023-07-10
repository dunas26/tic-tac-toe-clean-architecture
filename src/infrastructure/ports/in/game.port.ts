import { BoardModel } from "../../../domain/models";

export interface GamePort {
    getCurrentBoard(): BoardModel
}