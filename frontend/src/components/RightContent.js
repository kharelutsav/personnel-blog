import React from 'react'
import './RightContent.css'
import { SiLinkedin, SiGmail, SiGithub, SiInstagram } from 'react-icons/si'
import { FaFacebookSquare, FaYoutube } from 'react-icons/fa'

const SOCIAL_MEDIA = [
    { name: 'Linkedin', logo: SiLinkedin },
    { name: 'Facebook', logo: FaFacebookSquare },
    { name: 'Instagram', logo: SiInstagram },
    { name: 'Youtube', logo: FaYoutube },
    { name: 'GitHub', logo: SiGithub },
    { name: 'Gmail', logo: SiGmail },
]

const Container = ({ name, logo }) => {
    const LOGO = logo
    return (
        <div className="container">
            <LOGO className="logos" />
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
        <>
            {SOCIAL_MEDIA.map((media, index) => {
                return (
                    <Container
                        key={index}
                        name={media.name}
                        logo={media.logo}
                    />
                )
            })}
        </>
    )
}

export default RightContent
