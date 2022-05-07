import React from 'react'
import { SiLinkedin, SiGmail, SiGithub } from 'react-icons/si'
import './Footer.css'

function Footer() {
    return (
        <footer className="admin-footer">
            <p>Copyright@ All rights belong to Utsav Kharel. 2022</p>
            <a href="https://github.com/kharelutsav">
                <SiGithub className="logo" />
            </a>
            <a href="mailto:kharelutsav4@gmail.com">
                <SiGmail className="logo" />
            </a>
            <a href="https://www.linkedin.com/in/utsav-kharel-9768761b5/">
                <SiLinkedin className="logo" />
            </a>
        </footer>
    )
}

export default Footer
