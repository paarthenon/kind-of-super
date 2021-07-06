import {useDispatch} from 'react-redux';
import {View} from '../core/view';
import {Action} from '../redux/actions';
import {Link} from './Link';

export interface OptionsPageProps {
}
export const OptionsPage = ({}: OptionsPageProps) => {
    const dispatch = useDispatch();

    const toMenu = () => dispatch(Action.GoTo(View.MainMenu()));
    return (
        <div>
            <p>Options</p>

            <Link text='back' goto={View.MainMenu()} />
        </div>
    );
}