import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import image from '../images/logo.png';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            <img src={image} alt="" />
            Bringle
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Hem
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/om'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Om Bringle
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/funktioner'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Funktioner
              </Link>
            </li>

            <li>
              <a
                href="https://app.bringle.fi"
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Logga in
              </a>
            </li>
          </ul>
          {button && <Button buttonStyle='btn--secondary'>Logga in</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;