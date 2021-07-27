import {useGame} from 'redux/hooks';


export interface HomeProps {}
export const Home = ({}: HomeProps) => {
    const player = useGame(g => g.player);
    return (
        <div>
            Welcome home, hero.
        </div>
    );
}