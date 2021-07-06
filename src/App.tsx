import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {CreateHero} from './ui/CreateHero';
import {MainMenu} from './ui/MainMenu';
import {View} from './core/view';
import {useSelector} from 'react-redux';
import {useAppState} from './redux/hooks';
import {Home} from './ui/Home';
import {match} from 'variant';
import {AboutPage} from './ui/AboutPage';
import {OptionsPage} from './ui/OptionsPage';

function App() {
    const view = useAppState(s => s.view);
    return (
        <div className="App">
            {match(view, {
                About: _ => <AboutPage />,
                CharacterCreation: _ => <CreateHero />,
                Home: _ => <Home />,
                MainMenu: _ => <MainMenu />,
                Options: _ => <OptionsPage />
            })}
        </div>
    );
}

export default App;
