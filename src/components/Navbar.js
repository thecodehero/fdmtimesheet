import React from 'react'
import {Link} from 'react-router-dom';
import logo from './logo.png';
import './Navbar.css';
import NavbarOptions from './NavbarOptions';

function Navbar() {
    return (
        <div>
            <nav className="navbar">
                <figure>
                    <img src={logo} alt='FDM powered by iSheet' />
                </figure>
                <div className="navOptions">
                    <ul>
                        {NavbarOptions.map((item) => {
                            return (
                                <Link to={item.url} id="Link2">
                                    <li>
                                        <a className={item.cName} href={item.url}>
                                            <i class={item.icon}></i>
                                            {item.title}
                                        </a>
                                    </li>
                                </Link>
                            )
                        })}
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar