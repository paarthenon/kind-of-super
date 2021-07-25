import {catalog} from 'variant';

/**
 * One of the "classic four" elements.
 * 
 * Think avatar the last airbender.
 * 
 * Side note: Technically there were often 5 elements. Sometimes the
 * 5th element was Akasha, sound/space. Sometimes it was metal.
 */
export const Element = catalog([
    'fire',
    'air',
    'water',
    'earth',
]);
export type Element = keyof typeof Element;
