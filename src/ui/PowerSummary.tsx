import {Superpower} from 'core/superpower';
import {match, onLiteral} from 'variant';

export interface PowerSummaryProps {
    power: Superpower
}
export const PowerSummary = ({power}: PowerSummaryProps) => {
    return (
        <span>
            {match(power, {
                ElementalMagic: ({element}) => `controls the element of ${element}`,
                Flight: ({speed, stamina}) => `can fly ${speed} m/s for ${stamina} seconds,
                    resulting in a total distance of ${speed * stamina} meters.`,
                Invisibility: ({method}) => `goes invisible at will. 
                    This ${method === 'light manipulation' ? 'will' : `won't`} fool cameras.`,
                Phasing: () => `can phase through solid matter`,
                Teleportation: ({range}) => `teleports at will up to ${range} meters away`,
            })}
        </span>
    );
}