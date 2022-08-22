import React, { useState } from 'react'
import { CgProfile } from 'react-icons/cg'
import './Account.css'
import './RightContent.css'
import { SiLinkedin, SiGithub, SiInstagram } from 'react-icons/si'
import { FaYoutube } from 'react-icons/fa'
import axios from '../config/axios-config'

const SOCIAL_MEDIA = [
    { name: 'Linkedin', logo: SiLinkedin },
    { name: 'Instagram', logo: SiInstagram },
    { name: 'Youtube', logo: FaYoutube },
    { name: 'GitHub', logo: SiGithub },
]

const user = { social: {} }

const Container = ({ name, logo }) => {
    const [link, setLink] = useState('')
    const LOGO = logo
    return (
        <div className="container">
            <LOGO className="logos" />
            <input
                style={{ display: 'block' }}
                placeholder={name}
                className="links"
                name={name}
                value={link}
                onChange={(event) => setLink(event.target.value)}
                onBlur={() => (user.social[name] = link)}
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
        user.profile = file.name
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
    const [phone, setPhone] = useState('')
    const [name, setName] = useState('')
    const [email, setImage] = useState('')
    return (
        <div className="author-info">
            <label className="input-creds" htmlFor="name">
                Author's Name
            </label>
            <input
                className="input-creds"
                name="name"
                id="name"
                onChange={(event) => setName(event.target.value)}
                onBlur={() => (user.fullname = name)}
            />{' '}
            <br />
            <label className="input-creds" htmlFor="phone" type="number">
                Phone Number
            </label>
            <input
                className="input-creds"
                name="phone"
                id="phone"
                onChange={(event) => setPhone(event.target.value)}
                onBlur={() => (user.phone = phone)}
            />{' '}
            <br />
            <label className="input-creds" htmlFor="name">
                Author's Email
            </label>
            <input
                className="input-creds"
                name="name"
                id="name"
                onChange={(event) => setImage(event.target.value)}
                onBlur={() => (user.email = email)}
            />
        </div>
    )
}

function Account() {
    // Create new user.
    const create_user = () => {
        user.email = user.social.Gmail
        axios
            .post('/create-user', { ...user })
            .then((response) => {
                console.log(response.data)
            })
            .catch((err) => console.log(err))
    }

    // Render the account setup page.
    return (
        <div className="blogs-cont">
            <Avatar />
            <div className="create-new">
                <AuthorInfo />
            </div>
            <div className="create-new">
                <RightContent />
            </div>
            <button className="save-btn" onClick={create_user}>
                Save Info
            </button>
        </div>
    )
}

export default Account
