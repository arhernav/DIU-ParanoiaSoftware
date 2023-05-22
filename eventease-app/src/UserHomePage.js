import React from 'react';

const UserHomePage = ({ handleMenuOption }) => {
    
    const handleOptionClick = (option) => {
        handleMenuOption(option);
    };

    return (
        <div>
            <h1>Pagina de inicio del usuario -emilio-</h1>
            <p>Elige una opción:</p>
            <ul>
                <li onClick={() => handleOptionClick('events')}>Gestionar eventos</li>
                {/* más opiones del menú */}
            </ul>
        </div>
    );
};

export default UserHomePage;
