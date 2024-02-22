import React, { useState, useContext } from "react";
import { NavLink } from 'react-router-dom';

import FavoriteContext from "../../context/FavoriteContext";

function Header({ cartItemCount }) {
    const [menuOpen, setMenuOpen] = useState(false);
    const { favoriteItems } = useContext(FavoriteContext);

    const handleToggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const handleNavLinkClick = () => {
        setMenuOpen(false); // Cierra el menú al hacer clic en un enlace
    };

    return (
        <header className="header">
            <nav className="barra">
                <div className="logo">
                    <NavLink to="/"><img className="logoStyle" src="../../images/WorkWave.png" alt="logo" /></NavLink>
                </div>
                <input className="menu__btn" type="checkbox" id="menu__btn" />
                <label className="menu__icon" htmlFor="menu__btn" onClick={handleToggleMenu}><span className="navicon"></span></label>
                {/* <!--Menú--> */}
                <ul className={`menu ${menuOpen ? 'active' : ''}`}>
                    <li className="navefect"><NavLink to="/" onClick={handleNavLinkClick}>Inicio</NavLink></li>
                    <li className="navefect"><NavLink to="/Products" onClick={handleNavLinkClick}>Ofertas</NavLink></li>
                    <li className="navefect"><NavLink to="/Aboutus" onClick={handleNavLinkClick}>Sobre nosotros</NavLink></li>
                    <button className="button-nav">Registrate</button>
                    <button className="button-nav">Entra</button>
                    <li><NavLink to="/Search" onClick={handleNavLinkClick}>🔎</NavLink></li>
                    <li><NavLink to="/WishList" onClick={handleNavLinkClick}><span className="heart-badge, nav-icon">{favoriteItems.length}</span>❤️</NavLink></li>
                    <li><NavLink to="/Search" onClick={handleNavLinkClick}><span className="lupa-badge, nav-icon">{favoriteItems.length}</span>📋</NavLink></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
