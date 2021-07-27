import {fields, Flags, TypeNames, variant, VariantOf} from 'variant';

export type InvisibilityMethod = 'psychic' | 'light manipulation';

export const Superpower = variant({
    /**
     * Avatar-like powers
     */
    ElementalMagic: fields<{
        element: 'fire' | 'air' | 'water' | 'earth',
    }>(),
    /**
     * Fly through the air.
     */
    Flight: fields<{
        /**
         * Speed in meters / second.
         */
        speed: number;
        /**
         * Airtime in minutes.
         */
        stamina: number;
    }>(),
    /**
     * 
     */
    Invisibility: fields<{
        /**
         * How their invisibility works.
         * 
         * - **psychic** will fool people.
         * - **light manipulation** will fool cameras.
         */
        method: InvisibilityMethod;
    }>(),
    /**
     * The ability to pass through solid matter.
     */
    Phasing: {},
    /**
     * Jump from one place to another instantly.
     */
    Teleportation: fields<{
        /**
         * Range in meters.
         */
        range: number;
        /**
         * Amount of times it can be used per day.
         */
        uses: number;
    }>(),
})
export type Superpower<T extends TypeNames<typeof Superpower> = undefined> = VariantOf<typeof Superpower, T>
export type Superpowers = Flags<typeof Superpower>;