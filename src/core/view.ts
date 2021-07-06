import {TypeNames, variant, VariantOf} from 'variant';

export const View = variant({
    About: {},
    CharacterCreation: {},
    Home: {},
    MainMenu: {},
    Options: {},
})
export type View<T extends TypeNames<typeof View> = undefined> = VariantOf<typeof View, T>