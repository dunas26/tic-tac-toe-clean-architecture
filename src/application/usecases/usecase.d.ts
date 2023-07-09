export interface UseCase {
    do(...args: any[]): any;
}

export interface StartNewGameUseCase extends UseCase { }
export interface SetPlayingBoardUseCase extends UseCase { }