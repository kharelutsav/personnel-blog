import React, { useState } from 'react'
import { CgProfile } from 'react-icons/cg'
import './Account.css'
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
                name={name}
            />
        </div>
    )
}

const RightContent = () => {
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

const Avatar = () => {
    const [showImage, setShowImage] = useState()
    const imageSelected = (event) => {
        const [file] = event.target.files
        setShowImage(URL.createObjectURL(file))
    }
    return (
        <div className="avatar">
            <label htmlFor="profile">
                {showImage ? (
                    <img
                        alt=""
                        src={showImage}
                        style={{
                            width: '100%',
                            height: '100%',
                            borderRadius: '2.8rem',
                        }}
                    />
                ) : (
                    <CgProfile
                        style={{
                            width: '100%',
                            height: '100%',
                            color: 'lightslategrey',
                        }}
                    />
                )}
            </label>
            <input
                type="file"
                accept="image/*"
                style={{ display: 'none', visibility: 'none' }}
                id="profile"
                onChange={imageSelected}
            />
        </div>
    )
}

const AuthorInfo = () => {
    return (
        <div className="author-info">
            <label className="input-creds" htmlFor="name">
                Author's Name
            </label>
            <input className="input-creds" name="name" id="name" /> <br />
            <label className="input-creds" htmlFor="phone">
                Phone Number
            </label>
            <input className="input-creds" name="phone" id="phone"></input>
        </div>
    )
}

function Account() {
    const AboutAuthor = () => {
        return (
            <div className="about-author">
                <Avatar />
                <AuthorInfo />
            </div>
        )
    }

    return (
        <div className="main-content">
            <div className="about">
                <AboutAuthor />
            </div>
            <div className="social-links">
                <RightContent />
            </div>
            <button className="save-btn">Save Info</button>
        </div>
    )
}

export default Account