import React, {useState} from 'react';
import {Link} from 'react-scroll';
import logo from '../../../../../assets/fdf/logo.png';
import Bars from '../../../../../assets/fdf/bars.png';
import './Header.css';

export const Header = () => {
    const mobile = window.innerWidth <= 768;
    const [menuOpened, setMenuOpened] = useState(false);
    console.log(mobile)
    return (
        <div className='header' id='header'>
            <img src={logo} alt="" className='logo'/>
            {(menuOpened === false && mobile === true)
                ? (<div
                    onClick={()=> setMenuOpened(true)}
                    className='bars'>
                    <img src={Bars} alt=""/>
                </div>)
                : (<ul className='header-menu'>
                    <li>
                        <Link
                        onClick={() => setMenuOpened(false)}
                        activeClass='active'
                        to='header'
                        spy={true}
                        >Home</Link>
                    </li>

                    <li>
                        <Link
                            onClick={() => setMenuOpened(false)}
                            to='programs'
                            spy={true}
                        >Programs</Link>
                    </li>

                    <li>
                        <Link
                            onClick={() => setMenuOpened(false)}
                            to='reasons'
                            spy={true}
                        >Why us</Link>
                    </li>

                    <li>
                        <Link
                            onClick={() => setMenuOpened(false)}
                            to='plans'
                            spy={true}
                        >Plans</Link>
                    </li>

                    <li>
                        <Link
                            onClick={() => setMenuOpened(false)}
                            to='testimonials'
                            spy={true}
                        >Testimonials</Link>
                    </li>

                </ul>)}

        </div>
    )
}