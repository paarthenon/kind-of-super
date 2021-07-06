import React from 'react';
import {useDispatch} from 'react-redux';
import {View} from '../core/view';
import {Action} from '../redux/actions';

export interface LinkProps {
    text?: string;
    goto?: View;
    href?: string;
    onClick?: () => void;
    children?: React.ReactNode;
}
export const Link = ({text, goto, href, onClick, children}: LinkProps) => {
    const dispatch = useDispatch();
    function click() {
        if (onClick != undefined) {
            onClick();
        } else if (goto != undefined) {
            dispatch(Action.GoTo(goto));
        } else if (href != undefined) {
            window.location.href = href;
        }
    }
    const linkStyle: React.CSSProperties = {
        cursor: 'pointer',
        textDecoration: 'underline',
    }
    return (
        <a style={linkStyle} onClick={click}>
            {text}{children}
        </a>
    );
}