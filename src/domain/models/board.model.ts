import { TileValue } from "../values";
import { Mark } from "../values/tile.value";

export class BoardModel {
    constructor(id: string, moveCount: number, tiles?: TileValue[]) {
        this.id = id;
        this.moveCount = moveCount;
        this.setUpTiles(tiles);
    }
    public readonly id: string;
    public readonly moveCount: number;
    public tiles!: TileValue[];

    public mark(tile: number, mark: Mark): this {
        if (!this.validTileNumber(tile)) throw new Error("Invalid tile number");
        if(!this.canMarkTile(tile)) return this;
        this.tiles[tile] = new TileValue(mark);
        return this;
    }

    private validTileNumber(tile: number): boolean {
        if (this.tiles.length == 0) return false;
        return tile >= 0 && tile < this.tiles.length;
    }

    private setUpTiles(tiles?: TileValue[]): this {
        this.tiles = tiles
            ? tiles
            : Array<TileValue>(9).fill(new TileValue(""));
        return this;
    }

    private canMarkTile(index: number): boolean {
        return this.tiles[index].content == "";
    }
}