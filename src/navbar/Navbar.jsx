import { useState } from 'react';
import '../navbar/Navbar.css';


function Navbar() {
    const [togl, setTogl] = useState('navbar_menu');
    const navToggle = () => {
        togl === 'navbar_menu' ? setTogl('navbar_menu nav_active') : setTogl('navbar_menu');

    }


    return (
        <div>
            <nav className='nav'>
                <h2 className='logo'>NAVBAR</h2>
                <ul className={togl} >
                    <li className="nav_li">
                        HOME
                    </li>

                    <li className="nav_li">
                        ABOUT
                    </li>

                    <li className="nav_li">
                        MENU
                    </li>

                    <li className="nav_li">
                        MY Blog
                    </li>
                    
                </ul>
            
                
                <div onClick={navToggle} className="nav_togl">
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                </div>

            </nav>
        </div>

    )
}

export default Navbar;