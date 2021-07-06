import {Superpower} from 'core/superpower';
import {useState} from 'react';
import {match, onLiteral, types} from 'variant';

interface PowerTemplate<T extends Superpower['type']> {
    onSubmit: (power: Superpower<T>) => void;
}

const powerKeys = types(Superpower).sort();

export const PowerForm = ({onSubmit}: PowerTemplate<Superpower['type']>) => {
    const [powerKey, setPowerKey] = useState<Superpower['type']>();

    return (
        <div>
            Power form.
            <select value={powerKey} onChange={e => setPowerKey(e.currentTarget.value as Superpower['type'])}>
                <option key='empty' value={undefined}></option>
                {powerKeys.map(key => (
                    <option key={key} value={key}>{key}</option>
                ))}
            </select>

            {powerKey != undefined ? (
                match(onLiteral(powerKey), {
                    Flight: () => <FlightPowerForm onSubmit={onSubmit} />,
                    Invisibility: () => <InvisibilityPowerForm onSubmit={onSubmit} />,
                    default: () => <div>Unhandled...</div>,
                })
            ) : (
                <div>
                    No power selected.
                </div>
            )}
        </div>
    );
}

export const FlightPowerForm = ({onSubmit}: PowerTemplate<'Flight'>) => {
    const [speed, setSpeed] = useState(10); // 22 mph
    const [stamina, setStamina] = useState(60 * 60); // 1 hour.

    function submit() {
        onSubmit(Superpower.Flight({speed, stamina}));
    }

    return (
        <div>
            Flight
        </div>
    )
}

export const InvisibilityPowerForm = ({onSubmit}: PowerTemplate<'Invisibility'>) => {
    return (
        <div>
            Invis.
        </div>
    )
}