import React from 'react';
import './Navbar.css';
import logo from './logo192.png';

const Navbar = () => {
    return (
        <nav className='navbar' role='navigation' aria-label='main navigation'>
            <div className='navbar-brand'>
                <a className='navbar-item' href='/'>
                    <img src={logo} />
                </a>
                <a role='button' className='navbar-burger' aria-label='menu' aria-expanded='false' data-target='navbarBasicExample'>
                    <span aria-hidden='true'></span>
                    <span aria-hidden='true'></span>
                    <span aria-hidden='true'></span>
                </a>
            </div>

            <div id='navbarBasicExample' className='navbar-menu'>
                <div className='navbar-start'>
                    <a className='navbar-item'>
                        Home
                    </a>
                    <a className='navbar-item'>
                        About
                    </a>
                    <a className='navbar-item'>
                        Products
                    </a>
                    <a className='navbar-item'>
                        Blog
                    </a>
                    <a className='navbar-item'>
                        Services
                    </a>
                    <a className='navbar-item'>
                        Contact
                    </a>
                </div>

                <div className='navbar-end'>
                    <div className='navbar-item'>
                        <a className='button is-primary'>
                            <strong>Sign Up</strong>
                        </a>
                        <a className='button is-light'>
                            Log In
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
