import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

function Header({ setOverlay, loggedin, setUserblog }) {
    return (
        <header className="admin-header">
            <ul>
                <li>
                    <span className="nav" onClick={() => setUserblog(false)}>
                        Dashboard
                    </span>
                </li>
                {loggedin ? (
                    <>
                        <li>
                            <span
                                className="nav"
                                onClick={() => setUserblog(true)}
                            >
                                MyBlogs
                            </span>
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
