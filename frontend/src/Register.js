import React, { useEffect, useState } from 'react'
import './Register.css'
import { SiLinkedin, SiGithub, SiInstagram } from 'react-icons/si'
import { FaYoutube } from 'react-icons/fa'
import axios from './components/axios-config'

const USER = {}

function Register({ setOverlay, setBlogs }) {
    const [value, setValue] = useState(1)

    const SOCIAL_MEDIA = [
        { name: 'Linkedin', alias: 'linkedin', logo: SiLinkedin },
        { name: 'Instagram', alias: 'instagram', logo: SiInstagram },
        { name: 'Youtube', alias: 'youtube', logo: FaYoutube },
        { name: 'GitHub', alias: 'github', logo: SiGithub },
    ]

    const Case1 = () => {
        const [fullname, setFullname] = useState(USER.fullname || '')
        const [username, setUsername] = useState(USER.username || '')
        const [password, setPassword] = useState(USER.password || '')
        const [email, setEmail] = useState(USER.email || '')
        const [phone, setPhone] = useState(USER.phone || '')
        useEffect(() => {
            return () => {
                USER.fullname = fullname
                USER.username = username
                USER.password = password
                USER.email = email
                USER.phone = phone
            }
        })
        return (
            <>
                <p>Login credentials</p>
                <input
                    placeholder="Full Name"
                    value={fullname}
                    onChange={(e) => setFullname(e.target.value)}
                />
                <input
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <input
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    placeholder="Phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                />
            </>
        )
    }

    const Case2 = () => {
        const Container = ({ name, alias, logo }) => {
            const [link, setLink] = useState(USER[alias] || '')
            const LOGO = logo
            useEffect(() => {
                USER[alias] = link
            })
            return (
                <div className="container">
                    <LOGO className="logos" />
                    <input
                        style={{ display: 'block' }}
                        placeholder={name}
                        className="links"
                        name={alias}
                        value={link}
                        onChange={(e) => setLink(e.target.value)}
                    />
                </div>
            )
        }
        return (
            <>
                <p>Your social media links.</p>
                {SOCIAL_MEDIA.map((media, index) => {
                    return (
                        <Container
                            key={index}
                            name={media.name}
                            alias={media.alias}
                            logo={media.logo}
                        />
                    )
                })}
            </>
        )
    }

    const Case3 = () => {
        const [about, setAbout] = useState(USER.about || '')
        useEffect(() => {
            USER.about = about
        })
        return (
            <>
                <p>Tell us some thing about yourself.</p>
                <textarea
                    placeholder="Networking enthusiast with over 10 years of experience in software development and system admin...."
                    value={about}
                    onChange={(e) => setAbout(e.target.value)}
                ></textarea>
            </>
        )
    }

    // Create new user.
    const create_user = () => {
        axios
            .post('/create-user', { ...USER })
            .then((response) => {
                setBlogs(response.data)
            })
            .catch((err) => console.log(err))
    }

    return (
        <div className="overlay-container">
            <div className="login-register-cont">
                <div className="cancel">
                    <span
                        className="x"
                        onClick={() => {
                            setOverlay(false)
                        }}
                    >
                        X
                    </span>
                </div>
                <div className="form">
                    <div className="body">
                        {
                            {
                                1: <Case1 />,
                                2: <Case2 />,
                                3: <Case3 />,
                            }[value]
                        }
                    </div>
                    <div className="footer">
                        <button
                            onClick={() =>
                                value == 1
                                    ? setOverlay(false)
                                    : setValue(value - 1)
                            }
                        >
                            {{ 1: 'Cancel' }[value] || 'Back'}
                        </button>
                        <button
                            onClick={() =>
                                value == 3 ? create_user() : setValue(value + 1)
                            }
                        >
                            {{ 3: 'Register' }[value] || 'Next'}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register
