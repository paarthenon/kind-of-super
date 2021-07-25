import {NotReady, Ready} from 'core/ready';
import {Superpower} from 'core/superpower';
import {View} from 'core/view';
import {useMemo, useState} from 'react';
import {useDispatch} from 'react-redux';
import {Action} from 'redux/actions';
import {useAppState, useReady} from 'redux/hooks';
import {isType} from 'variant';
import {Well} from './lib/Well';
import {Link} from './Link';
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

    const ready = useReady(raise => {
        if (heroName == undefined || heroName === '') {
            raise('Hero name cannot be empty');
        }
    });

    function create() {
        dispatch(Action.StartGame());
    }
    return (
        <div>
            <p>Create a new hero</p>
            <input placeholder='Superhero Name' value={heroName} onChange={e => setHeroName(e.currentTarget.value)} />
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
            <Well>
                <PowerForm onSubmit={power => setPowers([...powers, power])} />
            </Well>
            <button onClick={create} disabled={ready.type === 'NotReady'}>Create</button>
            <p>
                <Link text='back' goto={View.MainMenu()} />
            </p>
        </div>
    );
}