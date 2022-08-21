import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

function Header({ setOverlay, loggedin }) {
    return (
        <header className="admin-header">
            <ul>
                <li>
                    <Link
                        to="/"
                        className="nav"
                        style={{ textDecoration: 'none' }}
                    >
                        Dashboard
                    </Link>
                </li>
                {loggedin ? (
                    <>
                        <li>
                            <Link to="/my-blogs" className="nav">
                                MyBlogs
                            </Link>
                        </li>
                        <li>
                            <span
                                className="nav"
                                onClick={() => setOverlay('create-new')}
                            >
                                CreateNew
                            </span>
                        </li>
                        <li>
                            <Link to="/my-account" className="nav">
                                Account
                            </Link>
                        </li>
                    </>
                ) : (
                    <>
                        <li>
                            <span
                                className="nav"
                                onClick={() => setOverlay('register')}
                            >
                                Register
                            </span>
                        </li>
                    </>
                )}
            </ul>
        </header>
    )
}

export default Header
