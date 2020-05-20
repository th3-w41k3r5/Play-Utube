import React from 'react'
import logo from './logo/logo white.png';
import Search from './Search'

function Header() {
    return (
        <div class="header">
            <img src={logo} className="logo" alt="logo" />
            <div class="header-right">
                <Search/>               
            </div>
        </div>
    )
}

export default Header
