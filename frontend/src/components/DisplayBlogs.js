import React, { useState } from 'react'
import './DisplayBlogs.css'
import { SiLinkedin, SiGmail, SiGithub, SiInstagram } from 'react-icons/si'
import { FaFacebookSquare, FaYoutube } from 'react-icons/fa'

const Avatar = () => {
    return (
        <div className="avatar-blogs">
            <img
                alt=""
                src="http://localhost:3000/utsav.jpg"
                style={{
                    width: '56px',
                    height: '56px',
                    borderRadius: '2.8rem',
                }}
            />
        </div>
    )
}

const Container = ({ address, logo }) => {
    const LOGO = logo
    return (
        <a href={address}>
            <LOGO className="logos" />
        </a>
    )
}

const SocialLinks = () => {
    const [Links, setLinks] = useState([
        { address: '#', logo: SiLinkedin },
        { address: '#', logo: FaFacebookSquare },
        { address: '#', logo: SiGmail },
        { address: '#', logo: SiGithub },
        { address: '#', logo: FaYoutube },
        { address: '#', logo: SiInstagram },
    ])
    return (
        <div className="social-container">
            {Links.map((link, index) => {
                return (
                    <Container
                        key={index}
                        address={link.address}
                        logo={link.logo}
                    />
                )
            })}
        </div>
    )
}

const AboutUser = () => {
    const [userInfo, setUserInfo] = useState({
        name: 'Test User',
        email: 'email@example.com',
        phone: '0123456789',
    })
    return (
        <div className="about-user">
            <p className="user-creds user-name">{userInfo.name}</p>
            <p className="user-creds">{userInfo.phone}</p>
            <p className="user-creds">{userInfo.email}</p>
        </div>
    )
}

const Title = () => {
    return <p>None</p>
}

const Abstract = () => {
    return <p>None</p>
}

const ContentInfo = () => {
    return (
        <div className="content-disp-block">
            <Title />
            <Abstract />
        </div>
    )
}

const UserInfo = () => {
    return (
        <div className="user-disp-block">
            <div className="check-mate">
                <AboutUser />
                <Avatar />
            </div>
            <SocialLinks />
        </div>
    )
}

const BlogInfo = () => {
    return (
        <div className="about-blogs">
            <UserInfo />
            <ContentInfo />
        </div>
    )
}

function DisplayBlogs() {
    return (
        <>
            <div className="main-blogs">
                <div className="thumbnail-blogs">
                    <img
                        src="http://localhost:3000/panda.jpg"
                        alt=""
                        className="thumbnail-image"
                    />
                </div>
                <BlogInfo />
            </div>
            <div className="main-blogs">
                <div className="thumbnail-blogs">
                    <img
                        src="http://localhost:3000/panda.jpg"
                        alt=""
                        className="thumbnail-image"
                    />
                </div>
                <BlogInfo />
            </div>
            <div className="main-blogs">
                <div className="thumbnail-blogs">
                    <img
                        src="http://localhost:3000/panda.jpg"
                        alt=""
                        className="thumbnail-image"
                    />
                </div>
                <BlogInfo />
            </div>
            <div className="main-blogs">
                <div className="thumbnail-blogs">
                    <img
                        src="http://localhost:3000/panda.jpg"
                        alt=""
                        className="thumbnail-image"
                    />
                </div>
                <BlogInfo />
            </div>
        </>
    )
}

export default DisplayBlogs
