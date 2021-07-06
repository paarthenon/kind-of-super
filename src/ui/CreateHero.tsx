import {Superpower} from 'core/superpower';
import {useMemo, useState} from 'react';
import {useDispatch} from 'react-redux';
import {Action} from 'redux/actions';
import {useAppState} from 'redux/hooks';
import {PowerForm} from './PowerForm';
import {PowerSummary} from './PowerSummary';

export interface CreateHeroProps {}
export const CreateHero = ({}: CreateHeroProps) => {
    const startingPoints = useAppState(s => s.options.startingPoints);
    const [heroName, setHeroName] = useState('');
    const dispatch = useDispatch();

    const [powers, setPowers] = useState<Superpower[]>([
        Superpower.ElementalMagic({element: 'air'}),
        Superpower.Invisibility({method: 'light manipulation'}),
    ]);
    const powerCost = useMemo(() => {

    }, [powers]);

    const ready = useMemo(() => {
        return (
               heroName != undefined
            && heroName != ''
        )
    }, [heroName]);
    
    function create() {
        dispatch(Action.StartGame())
    }
    return (
        <div>
            Create a new hero.
            <input value={heroName} onChange={e => setHeroName(e.currentTarget.value)} />
            <div>
                <p>Powers</p>
                <ul>
                    {powers.map(power => (
                        <li>
                            <PowerSummary power={power} />
                        </li>
                    ))}
                </ul>
            </div>
            <p>Current points: {startingPoints}</p>
            <PowerForm onSubmit={power => setPowers([...powers, power])} />
            <button onClick={create} disabled={!ready}>Create</button>
        </div>
    );
}