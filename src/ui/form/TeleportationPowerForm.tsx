import {Superpower} from 'core/superpower';
import {useState} from 'react';
import {ButtonSelect} from 'ui/lib/ButtonSelect';
import {PowerTemplate} from './PowerForm';

export const TeleportationPowerForm = ({onSubmit}: PowerTemplate<'Teleportation'>) => {
    const [range, setRange] = useState(10); 
    const [uses, setUses] = useState(2); // go somewhere and come back

    const rangeOptions = [
        10,
        60,
        180,
    ];

    function submit() {
        onSubmit(Superpower.Teleportation({range, uses}));
    }

    return (
        <div>
            Teleportation

            <p className='description'>Blink from one place to another instantly.</p>

            <ul>
                <li>Range: {range} meters</li>
                <li>Uses: {uses} per day</li>
            </ul>

            <p className='description'>How far can you jump in one trip?</p>
            <ButtonSelect
                options={rangeOptions.map(range => ({label: `${range} meters`, value: range}))}
                selected={range}
                setSelected={setRange}
            />
            <p className='description'>How many trips can you make in a day?</p>

            <input type="range" min="1" max="10" value={uses} onChange={e => setUses(parseInt(e.currentTarget.value))} />
            <p className='description'>Just remember... don't open your eyes. You don't want to see what you're tunneling through.</p>
            <button onClick={submit}>Travel through the void.</button>
        </div>
    )
};
