import React from 'react'
import './Header.css'

function Header() {
    return (
        <header className="admin-header">
            <ul>
                <li>
                    <a href="#" className="nav">
                        Home
                    </a>
                </li>
                <li>
                    <a href="#" className="nav">
                        About
                    </a>
                </li>
                <li>
                    <a href="#" className="nav">
                        Blogs
                    </a>
                </li>
                <li>
                    <a href="#" className="nav">
                        Account
                    </a>
                </li>
            </ul>
        </header>
    )
}

export default Header
