import {InvisibilityMethod, Superpower} from 'core/superpower';
import {useState} from 'react';
import {ButtonSelect} from 'ui/lib/ButtonSelect';
import {matcher, onLiteral} from 'variant';
import {PowerTemplate} from './PowerForm';

export const InvisibilityPowerForm = ({onSubmit}: PowerTemplate<'Invisibility'>) => {
    const [method, setMethod] = useState<InvisibilityMethod>('psychic');
    function submit() {
        onSubmit(Superpower.Invisibility({method}))
    }
    const methods: {label: string, value: InvisibilityMethod}[] = [
        {label: 'Psychic Illusion', value: 'psychic'},
        {label: 'Light Manipulation', value: 'light manipulation'},
    ];

    return (
        <div>
            Invisibility

            <p>How does your power work?</p>

            <ButtonSelect
                options={methods}
                selected={method}
                setSelected={setMethod}
            />

            <div className='description'>
                {matcher(onLiteral(method)).lookup({
                    "light manipulation": <p>
                        You can manipulate light itself, bending it to your will.
                        By allowing light from behind you to flow to the other side as if you weren't there,
                        you hide yourself from both people and cameras.
                    </p>,
                    psychic: <p>
                        Your power works by tricking people into ignoring you. They store
                        no memories, and proceed as if you aren't there. Their brains fill
                        in the blind spot you create with a reasonable approximation of what
                        should be behind you.
                    </p>
                })}
            </div>

            <button onClick={submit}>Hide in plain sight</button>
        </div>
    )
}