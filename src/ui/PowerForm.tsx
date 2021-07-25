import {InvisibilityMethod, Superpower} from 'core/superpower';
import {useState} from 'react';
import {match, matcher, onLiteral, types} from 'variant';

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

    const staminaOptionsMinutes = [
        10,
        60,
        180,
    ];

    function submit() {
        onSubmit(Superpower.Flight({speed, stamina}));
    }

    return (
        <div>
            Flight Configuration

            <ul>
                <li>Speed: {speed} mph</li>
                <li>Stamina: {stamina / 60} minutes</li>
            </ul>
            <input type="range" min="1" max="50" value={speed} onChange={e => setSpeed(parseInt(e.currentTarget.value))} />
            <div>
                {staminaOptionsMinutes.map(stam => (
                    <button
                        style={stam * 60 === stamina ? {border: '2px solid rgb(90, 100, 220)'} : {}}
                        onClick={() => setStamina(stam * 60)}
                    >
                        {stam} minutes per day.
                    </button>
                ))}
            </div>
            <button onClick={submit}>Enter the sky</button>
        </div>
    )
}

export const InvisibilityPowerForm = ({onSubmit}: PowerTemplate<'Invisibility'>) => {
    const [method, setMethod] = useState<InvisibilityMethod>('psychic');
    function submit() {
        onSubmit(Superpower.Invisibility({method}))
    }
    return (
        <div>
            Invisibility

            <p>How does your power work?</p>

            <div className='description'>
                {matcher(onLiteral(method)).lookup({
                    "light manipulation": <p>
                        You can manipulate light itself, bending it to your will.
                        By allowing light from behind you to flow to the other side of
                        you as if you weren't there, you hide yourself from people
                        <i>and</i> cameras.
                    </p>,
                    psychic: <p>
                        Your power works by tricking people into ignoring you. They store
                        no memories, and proceed as if you aren't there. Their brains fill
                        in the blind spot you create with a reasonable approximation of what
                        shold be behind you.
                    </p>
                })}
            </div>

            <button onClick={submit}>Hide in plain sight</button>
        </div>
    )
}