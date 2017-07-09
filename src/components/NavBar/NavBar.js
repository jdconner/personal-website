import React from 'react';
import { Link, IndexLink } from 'react-router';
import './nav-bar.scss';

const NavBar = () => {
    return (    
        <nav id="navbar" className="navbar">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link to="/about">About</Link>
                </li>
                <li className="nav-item navbar-brand">
                    <IndexLink to="/">
                        {'<jdconner/>'}
                    </IndexLink>
                </li>
                <li className="nav-item">
                    <Link to="/blog">Blog</Link>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;
