import {Superpowers} from './superpower';

export interface Hero<Powers extends Superpowers = Superpowers> {
    name: string;
    powers: Powers;
}

