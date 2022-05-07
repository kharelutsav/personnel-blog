import React from 'react'
import './RightContent.css'

const LOGOS = [
    'Linkedin',
    'Facebook',
    'Instagram',
    'Youtube',
    'GitHub',
    'Gmail',
]

const Container = ({ name }) => {
    return (
        <div className="container">
            <input
                style={{ display: 'block' }}
                placeholder={name}
                className="links"
            />
        </div>
    )
}

function RightContent() {
    return (
        <div className="social-links">
            {LOGOS.map((logo, index) => {
                return <Container key={index} name={logo} />
            })}
        </div>
    )
}

export default RightContent
