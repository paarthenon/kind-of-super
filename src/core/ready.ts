import {variant} from 'variant';

export const {Ready, NotReady} = variant({
    Ready: {},
    NotReady: (issues: (string | JSX.Element)[] = []) => ({issues}),
});
export type Ready =
    | ReturnType<typeof Ready>
    | ReturnType<typeof NotReady>
;