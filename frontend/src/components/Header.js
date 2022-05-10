import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <header className="admin-header">
            <ul>
                <li>
                    <Link to="/" className="nav">
                        Dashboard
                    </Link>
                </li>
                <li>
                    <Link to="/my-blogs" className="nav">
                        MyBlogs
                    </Link>
                </li>
                <li>
                    <Link to="/create-new-blog" className="nav">
                        CreateNew
                    </Link>
                </li>
                <li>
                    <Link to="/my-account" className="nav">
                        Account
                    </Link>
                </li>
            </ul>
        </header>
    )
}

export default Header
