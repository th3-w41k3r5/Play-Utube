import React from 'react'
import { Link } from 'react-router-dom'

import logo from './logo/logo white.png';
import Search from './Search'

function Header() {
    return (
        <div className="header">
            <Link to="/">
                <img src={logo} className="logo" alt="logo" />
            </Link>
            <Search />
        </div>
    )
}

export default Header
