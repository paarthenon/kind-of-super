import {Superpower} from 'core/superpower';
import {useState} from 'react';
import {ButtonSelect} from 'ui/lib/ButtonSelect';
import {PowerTemplate} from './PowerForm';

export const FlightPowerForm = ({onSubmit}: PowerTemplate<'Flight'>) => {
    const [speed, setSpeed] = useState(10); // 22 mph, after conversion from m/s
    const [stamina, setStamina] = useState(60); // 1 hour.

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
            Flight

            <p className='description'>Take to the clouds. Flight is an iconic and versatile power.</p>
            <ul>
                <li>Speed: {speed} mph</li>
                <li>Stamina: {stamina} minutes</li>
            </ul>
            <p className='description'>How fast are you?</p>
            <input type="range" min="1" max="50" value={speed} onChange={e => setSpeed(parseInt(e.currentTarget.value))} />
            <p className='description'>How long can you fly?</p>
            <ButtonSelect
                options={staminaOptionsMinutes.map(stam => ({label: `${stam} minutes per day`, value: stam}))}
                selected={stamina}
                setSelected={setStamina}
            />
            <p className='description'>Ready?</p>
            <button onClick={submit}>Soar through blue skies</button>
        </div>
    )
}