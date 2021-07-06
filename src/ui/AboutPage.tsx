import {useDispatch} from 'react-redux';
import {View} from 'core/view';
import {Action} from 'redux/actions';
import {Link} from './Link';

export interface AboutPageProps {
}
export const AboutPage = ({}: AboutPageProps) => {
    return (
        <div>
            <p>
                <b>Kind of Super</b> is a demo project meant to illustrate what's possible
                when variant is incorporated into a project.
            </p>
            <Link text='back' goto={View.MainMenu()} />
        </div>
    );
}