import {View} from 'core/view';
import {useState} from 'react';
import {useAppState} from 'redux/hooks';
import {catalog, match, onLiteral} from 'variant';
import {AboutPage} from './AboutPage';
import {Link} from './Link';
import './MainMenu.css';
import {OptionsPage} from './OptionsPage';

export interface MainMenuProps {}
export const MainMenu = ({}: MainMenuProps) => {
    const isGameRunning = useAppState(s => s.game != undefined);
    return (
        <div className='main-menu'>
            <ul>
                {isGameRunning && (
                    <li>
                        <Link text='Resume' goto={View.Home()}/>
                    </li>
                )}
                <li>
                    <Link text='New Game' goto={View.CharacterCreation()} />
                </li>
                <li>
                    <Link text='Options' goto={View.Options()} />
                </li>
                <li>
                    <Link text='About' goto={View.About()} />
                </li>
            </ul>
        </div>
    );
}