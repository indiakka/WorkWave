import React, { useState } from 'react';
import { useRef } from 'react';


function Footer() {
  const menuRef = useRef(null);
  const btnSwitchRef = useRef(null);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const handleToggleMenu = () => {
    menuRef.current.classList.toggle('active');
  };

  const handleSwitchClick = () => {
    document.body.classList.toggle('dark', setIsDarkMode);
    setIsDarkMode(!isDarkMode);
    /* btnSwitchRef.current.classList.toggle('active');*/
  };

  return (
    <footer className="footer">
      <div className="comment1">
        <p> &copy;2024 Hackathon Equipo24 </p>
      </div>

      <div className="footer-section">
        <h3 className="footer-heading">Síguenos en Redes Sociales</h3>
        <ul className="social-icon" ref={menuRef}>
          <li className="social-icon__item">
            <a className="social-icon__link" to="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
              <ion-icon name="logo-facebook"></ion-icon>
            </a>
          </li>
          <li className="social-icon__item">
            <a className="social-icon__link" to="https://twitter.com/" target="_blank" rel="noopener noreferrer">
              <ion-icon name="logo-twitter"></ion-icon>
            </a>
          </li>
          <li className="social-icon__item">
            <a className="social-icon__link" to="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
              <ion-icon name="logo-linkedin"></ion-icon>
            </a>
          </li>
          <li className="social-icon__item">
            <a className="social-icon__link" to="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
              <ion-icon name="logo-instagram"></ion-icon>
            </a>
          </li>
        </ul>
        <button ref={btnSwitchRef} className="switch" id="switch" onClick={handleSwitchClick} aria-label="Cambiar a modo oscuro">
          <span><i className="fa-solid fa-sun"></i></span>
          <span><i className="fa-solid fa-moon"></i></span>
        </button>
        <input className="menu__btn" type="checkbox" id="menu__btn" />
        <label className="menu__icon" htmlFor="menu__btn" onClick={handleToggleMenu}><span className="navicon"></span></label>
      </div>

    </footer>
  );
}

export default Footer;