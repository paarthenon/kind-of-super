import {match} from 'variant';
import {Superpower} from './superpower';

/**
 * Calculate the cost of any particular power.
 * @param power 
 */
export function powerCost(power: Superpower) {
    let cost = 0;

    match(power, {
        ElementalMagic: () => {
            cost += 3;
        },
        Flight: ({}) => {
            cost += 2;
        },
        default: () => {
            cost += 5;
        }
    })
}