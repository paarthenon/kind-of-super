import {NotReady, Ready} from 'core/ready';
import React from 'react';
import {isType, match, matcher} from 'variant';

export interface SubmittableProps {
    isReady: Ready;
    onSubmit?: () => void;
    text?: string;
    children?: React.ReactChild;
}
export const Submittable = ({isReady, onSubmit, text, children}: SubmittableProps) => {
    return (
        <div>
            <button
                className='btn-cta'
                onClick={onSubmit}
                disabled={isType(isReady, NotReady)}
                title={match(isReady, {
                    Ready: _ => 'Ready to submit',
                    NotReady: ({issues}) => `There are ${issues.length} issues`,
                })}
            >
                {text}{children}
            </button>
            {isType(isReady, NotReady) && (
                <ul className='issues'>
                    {isReady.issues.map(issue => (
                        <li>{issue}</li>
                    ))}
                </ul>
            )}
        </div>

    );
}