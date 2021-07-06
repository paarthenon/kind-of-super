import {View} from '../core/view'

export interface RootState {
    game?: GameState;
    options: Options;
    view: View;
}

export interface Options {
    startingPoints: number;
}

export const defaultOptions: Options = {
    startingPoints: 15,
}

export interface GameState {
    player: unknown; // battlegrounds
}

export const initState: RootState = {
    options: defaultOptions,
    view: View.MainMenu(),
}
