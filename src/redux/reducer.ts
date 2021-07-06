import {View} from 'core/view';
import produce from 'immer';
import {just, match, matcher, types} from 'variant';
import {Action, AppAction, GameAction} from './actions';
import {GameState, initState, RootState} from './state';

export const appReducer = (state: RootState, action: AppAction) => {
    return produce(state, s => {
        match(action, {
            GoTo: ({payload}) => {
                s.view = payload;
            },
            StartGame: () => {
                s.game = {
                    player: 4,
                }
                s.view = View.Home();
            },
        })
    });
}

export const gameReducer = (game: GameState, action: GameAction) => {
    return game;
}

export const rootReducer = (state = initState, action: Action) => {
    return matcher(action)
        .when(types(AppAction), _ => appReducer(state, _))
        .when(types(GameAction), _ => (
            state.game
                ? {...state, game: gameReducer(state.game, _)}
                : state
        ))
        .else(just(state)); // return state for unhandled actions
}