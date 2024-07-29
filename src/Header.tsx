import { FaBars } from 'react-icons/fa';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className='header'>
      <div className='container'>
        <div className='navbar'>
          <div className='logo'>
            <img src='./images/logo.png' alt='MerlinX' />
          </div>
          <div className='toggle_button' onClick={() => setMenuOpen(!menuOpen)}>
            <FaBars />
          </div>
          <div className={menuOpen ? 'navbar_links active' : 'navbar_links'}>
            <ul>
              <li>
                <NavLink to='/'>Pradinis</NavLink>
              </li>
              <li>
                <NavLink to='/about'>Apie mus</NavLink>
              </li>

              <li>
                <NavLink to='/darbai'>Mūsų darbai</NavLink>
              </li>
              <li>
                <NavLink to='/DUK'>DUK</NavLink>
              </li>

              <li>
                <NavLink to='/contact'>Kontaktai</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
