import React, { useState } from 'react'
import { CgProfile } from 'react-icons/cg'
import './LeftContent.css'

const Avatar = () => {
    const [showImage, setShowImage] = useState()
    const imageSelected = (event) => {
        const [file] = event.target.files
        setShowImage(URL.createObjectURL(file))
    }
    return (
        <div className="picture">
            <label htmlFor="profile">
                {showImage ? (
                    <img
                        alt=""
                        src={showImage}
                        style={{ width: '70px', height: '70px' }}
                    />
                ) : (
                    <CgProfile style={{ width: '70px', height: '70px' }} />
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
        <div className="authors">
            <label htmlFor="name">Author's Name</label>
            <input className="inputCreds" name="name" id="name" />
            <label htmlFor="phone">Phone Number</label>
            <input className="inputCreds" name="phone" id="phone"></input>
        </div>
    )
}

const AboutAuthor = () => {
    return (
        <div className="about-author">
            <Avatar />
            <AuthorInfo />
        </div>
    )
}

const AboutArticle = () => {
    return <div className="about-article"></div>
}

function LeftContent() {
    return (
        <div className="about">
            <AboutAuthor />
            <AboutArticle />
        </div>
    )
}

export default LeftContent
