import {Element} from 'core/element';
import {Superpower} from 'core/superpower';
import {useState} from 'react';
import {ButtonSelect} from 'ui/lib/ButtonSelect';
import {matcher, onLiteral} from 'variant';
import {PowerTemplate} from './PowerForm';

export const ElementalMagicPowerForm = ({onSubmit}: PowerTemplate<'ElementalMagic'>) => {
    const [element, setElement] = useState<Element>(Element.fire);

    function submit() {
        onSubmit(Superpower.ElementalMagic({element}));
    }
    return (
        <div>
            Which element do you have mastery over?
            <ButtonSelect
                options={Object.values(Element).map(e => ({label: e, value: e}))}
                selected={element}
                setSelected={setElement} />

            <p className='description'>
                {matcher(onLiteral(element)).lookup({
                    air: 'Direct the winds and protect yourself with cyclone barriers.',
                    earth: 'Create terrain and manipulate sand.',
                    fire: 'Summon yoga fire, consciously control flames.',
                    water: 'Breathe underwater, cast ice projectiles.',
                })}
            </p>

            <button onClick={submit}>I embrace {element}</button>
        </div>

    );
};
