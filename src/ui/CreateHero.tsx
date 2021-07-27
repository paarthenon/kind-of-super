import {NotReady, Ready} from 'core/ready';
import {Superpower} from 'core/superpower';
import {View} from 'core/view';
import {useMemo, useState} from 'react';
import {useDispatch} from 'react-redux';
import {Action} from 'redux/actions';
import {useAppState, useReady} from 'redux/hooks';
import {isType} from 'variant';
import {Well} from 'ui/lib/Well';
import {Link} from 'ui/Link';
import {PowerForm} from 'ui/form/PowerForm';
import {PowerSummary} from 'ui/PowerSummary';
import {Submittable} from './lib/Submittable';

export interface CreateHeroProps {}
export const CreateHero = ({}: CreateHeroProps) => {
    const startingPoints = useAppState(s => s.options.startingPoints);
    const [heroName, setHeroName] = useState('');
    const dispatch = useDispatch();

    const [powers, setPowers] = useState<Superpower[]>([]);

    const ready = useReady(raise => {
        if (heroName == undefined || heroName === '') {
            raise(<span><b>Hero name</b> cannot be empty</span>);
        }
        if (powers.length === 0) {
            const hoverText = "Yes this is discriminatory. I wish we could change it, but we really can't. It's an insurance thing."
            raise(
                <span>
                    I'm sorry, but our hiring policy requires that {
                        <span className='hoverable' title={hoverText}>
                            heroes have powers.
                        </span>
                    }
                </span>
            )
        }
    });

    function create() {
        dispatch(Action.StartGame());
    }
    return (
        <div>
            <h2>Create a new hero</h2>
            <input className='name-input' placeholder='Superhero Name' value={heroName} onChange={e => setHeroName(e.currentTarget.value)} />
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

            <Submittable
                isReady={ready}
                onSubmit={create}
                text='Create Hero'
            />
            <p>
                <Link text='back' goto={View.MainMenu()} />
            </p>
        </div>
    );
}