import React from 'react'
import logo from './logo/logo white.png';
import Search from './Search'

function Header() {
    return (
        <div className="header">
            <img src={logo} className="logo" alt="logo" />
            <Search/>               
        </div>
    )
}

export default Header
