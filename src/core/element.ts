import {catalog} from 'variant';

/**
 * One of the "classic four" elements.
 * 
 * Think avatar the last airbender.
 */
export const Element = catalog([
    'fire',
    'air',
    'water',
    'earth',
]);
export type Element = keyof typeof Element;
