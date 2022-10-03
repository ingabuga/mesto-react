import React from 'react';
import logo from '../images/logo-mesto_white.svg';

function Header() {
    return (
        <header className="header">
            <img className="logo header__logo" alt="Логотип" src={logo}  />
        </header>
    )
}

export default Header;