import {TypedUseSelectorHook, useSelector} from 'react-redux';
import {GameState, RootState} from './state';

export const useAppState: TypedUseSelectorHook<RootState> = useSelector;
export const useGame = <T> (selector: (game: GameState) => T) => {
    const game = useAppState(s => s.game);
    if (game) {
        return selector(game);
    } else {
        throw new Error('Attempted to render without a game save loaded.');
    }
}