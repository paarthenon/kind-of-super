import {InvisibilityMethod, Superpower} from 'core/superpower';
import {useState} from 'react';
import {constant, just, match, matcher, onLiteral, types} from 'variant';
import {ElementalMagicPowerForm} from './ElementalMagicPowerForm';
import {FlightPowerForm} from './FlightPowerForm';
import {InvisibilityPowerForm} from './InvisibilityPowerForm';
import {PhasingPowerForm} from './PhasingPowerForm';
import {TeleportationPowerForm} from './TeleportationPowerForm';

export interface PowerTemplate<T extends Superpower['type']> {
    onSubmit: (power: Superpower<T>) => void;
}

const powerKeys = types(Superpower).sort(); // consistency. 

export const PowerForm = ({onSubmit}: PowerTemplate<Superpower['type']>) => {
    const [powerKey, setPowerKey] = useState<Superpower['type'] | ''>('');

    function submit(s: Superpower) {
        onSubmit(s);
        setPowerKey('');
    }

    return (
        <div>
            <select value={powerKey} onChange={e => setPowerKey(e.currentTarget.value as Superpower['type'])}>
                <option key='empty' value=''>--Select a power--</option>
                {powerKeys.map(key => (
                    <option key={key} value={key}>
                        {match(onLiteral(key), {
                            ElementalMagic: constant('Elemental Magic'),
                            default: constant(key),
                        })}
                    </option>
                ))}
            </select>

            <div style={{padding: '.5em'}}>
                {match(onLiteral(powerKey), {
                    ElementalMagic: () => <ElementalMagicPowerForm onSubmit={submit} />,
                    Flight: () => <FlightPowerForm onSubmit={submit} />,
                    Invisibility: () => <InvisibilityPowerForm onSubmit={submit} />,
                    Phasing: () => <PhasingPowerForm onSubmit={submit} />,
                    Teleportation: () => <TeleportationPowerForm onSubmit={submit} />,
                    '': () => <i>Select a type of power to start customizing it.</i>
                })}
            </div>
        </div>
    );
}





