import React from 'react';
import Menu from '../menu';
import './Header.css';
import LojaLogo from '../../images/pokemon-store-logo.png';

const Header = () => (
    <header className="app-header">
        <img src={LojaLogo}/>
        <Menu />
    </header>
)

export default Header;