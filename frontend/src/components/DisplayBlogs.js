import React, { useState } from 'react'
import './DisplayBlogs.css'
import { SiLinkedin, SiGmail, SiGithub, SiInstagram } from 'react-icons/si'
import { FaFacebookSquare, FaYoutube } from 'react-icons/fa'

const UserInfo = () => {
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

    const SocialLinks = () => {
        const [Links, setLinks] = useState([
            { address: '#', logo: SiLinkedin },
            { address: '#', logo: FaFacebookSquare },
            { address: '#', logo: SiGmail },
            { address: '#', logo: SiGithub },
            { address: '#', logo: FaYoutube },
            { address: '#', logo: SiInstagram },
        ])

        const Container = ({ address, logo }) => {
            const LOGO = logo
            return (
                <a href={address}>
                    <LOGO className="disp-logos" />
                </a>
            )
        }

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

const ContentInfo = ({ time }) => {
    const Abstract = () => {
        return (
            <p className="content-abstract">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                vulputate felis id magna iaculis, vel vulputate urna placerat.
                Sed ac aliquet lacus, in convallis nibh. Praesent quam purus,
                sollicitudin in ligula vel, molestie viverra justo. Donec
                pulvinar....(
                <a alt="" href="#">
                    read more
                </a>
                )
            </p>
        )
    }

    const Title = () => {
        return <p className="content-title">Lorem ipsum dolor sit amet</p>
    }

    return (
        <div className="content-disp-block">
            <Title />
            <hr style={{ margin: '0px', marginLeft: '0.1rem', width: '30%' }} />
            <p
                className="user-creds"
                style={{
                    textAlign: 'left',
                    paddingBottom: '0.1rem',
                    paddingLeft: '0.1rem',
                }}
            >
                9th August 2022
            </p>
            <Abstract />
        </div>
    )
}

function DisplayBlogs() {
    const BlogInfo = () => {
        return (
            <div className="about-blogs">
                <UserInfo />
                <ContentInfo />
            </div>
        )
    }

    const Thumbnail = () => {
        return (
            <div className="thumbnail-blogs">
                <img
                    src="http://localhost:3000/panda.jpg"
                    alt=""
                    className="thumbnail-image"
                />
            </div>
        )
    }

    return (
        <>
            <div className="main-blogs">
                <Thumbnail />
                <BlogInfo />
            </div>
            <div className="main-blogs">
                <Thumbnail />
                <BlogInfo />
            </div>
            <div className="main-blogs">
                <Thumbnail />
                <BlogInfo />
            </div>
            <div className="main-blogs">
                <Thumbnail />
                <BlogInfo />
            </div>
        </>
    )
}

export default DisplayBlogs
