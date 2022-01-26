import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';

import './Navbar.css';

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const [button, setButton] = useState(true)

  const showButton = () => {
    if (window.innerWidth <= 960){
      setButton(false);
    } else{
      setButton(true);
    }
  };

  useEffect(()=> {
    setButton();
  }, []);

  window.addEventListener('resize', showButton)

  return(
      <>
        <nav className='navbar'>
            <div className='navbar-container'>
                <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                    <h3 className='title'>TBWorld</h3> <i class="fas fa-globe-americas"></i>
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                  <i className= {click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                  <li className='nav-item'>
                    <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                      Home
                    </Link>
                  </li>
                  <li className='nav-item'>
                    <Link to="/product" className="nav-links" onClick={closeMobileMenu}>
                      Product
                    </Link>
                  </li>
                  <li className='nav-item'>
                    <Link to="/wservices" className="nav-links" onClick={closeMobileMenu}>
                      Services
                    </Link>
                  </li>
                  <li className='nav-item'>
                    <Link to="/sign-up" className="nav-links-mobile" onClick={closeMobileMenu}>
                      Sign Up
                    </Link>
                  </li>
                </ul>
                {button && <Button buttonStyle='btn--outline'>Sign Up</Button>}
                
            </div>
        </nav>
      </>
  );
};

export default Navbar;
