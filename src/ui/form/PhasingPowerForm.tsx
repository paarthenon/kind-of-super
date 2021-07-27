import {Superpower} from 'core/superpower';
import {PowerTemplate} from './PowerForm';

export const PhasingPowerForm = ({onSubmit}: PowerTemplate<'Phasing'>) => {
    return (
        <div>
            Phasing

            <p className='description'>
                The ability to walk through solid walls is no laughing matter.
            </p>
            <button onClick={() => onSubmit(Superpower.Phasing())}>Nothing can stop me now</button>

        </div>
    );
};
