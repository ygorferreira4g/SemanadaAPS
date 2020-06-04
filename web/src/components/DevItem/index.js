import React from 'react';

import './styles.css';

function DevItem({dev }) {
    return (
        <li className="dev-item">
            <header>

                <img src={dev.avatar_url} alt={dev.name} />
                <div className="user-info">
                    <strong> {dev.name}</strong>
                    <span>{dev.techs.join(',')}</span>
                </div>
            </header>

            <p>{dev.bio}</p>

            <a href={`https://www.google.com/maps/@-16.6543105,-49.3789567,12z?hl=pt-BR}`} > Acessar Local </a>

        </li>

    );
}
export default DevItem; 