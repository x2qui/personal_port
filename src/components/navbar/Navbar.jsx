import React, {useState} from 'react';
import './navbar.css';
import Logo from '../../assets/x2qlogo.png';
import Menuopen from '../../assets/x2qmenuopen.png';
import Menuclose from '../../assets/x2qmenuclose.png';

import { Link } from 'react-router-dom';



const Navbar = () => {

    const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className='x2q__navbar slide-in-top' >
        <div className='x2q__navbar-content'>
            <div className='x2q__navbar-logo'>
                <Link to='/'><img src={Logo} alt='logo' /></Link>
            </div>
            
            <div className="x2q__navbar-menu">
            
                {toggleMenu
                ? 
                    <img src={Menuclose} alt='open menu' onClick={() => setToggleMenu(false)} />
                :   <img src={Menuopen} alt='close menu' onClick={() => setToggleMenu(true)} />
                 
                } 
            
                { toggleMenu && (
                    <div className="x2q__navbar-menu_container slide-left">
                    <div className="x2q__navbar-menu_container-links">
                    <p><Link to='/'>Work</Link></p>
                    <p><Link to='/time' target={'_blank'}>Time</Link></p>
                    <p><Link to='/about'>About</Link></p>
                    </div>
                    </div>

                )}
            </div>
        </div>
    </div>
  );
}

export default Navbar;
