import React from 'react';
import { Link } from 'react-router-dom';

export default function ButtonsControl() {
    return (
        <div class="s-controller">
            <Link to="/tobey-page" class="s-controller_button">
                <div class="s-controller_button">
                    01
                </div>
            </Link>
            <Link to="/tom-page" class="s-controller_button">
            <div class="s-controller_button">
                02
            </div>
            </Link>
            <div class="s-controller_button">
                03
            </div>
            <div class="s-controller_line"></div>
        </div>
    )
}

export function BackButton() {
    return (
        <div class="menu-info">
            <Link to="/" >  
                    Voltar
            </Link>
        </div>
    )
}