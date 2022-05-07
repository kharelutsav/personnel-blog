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
        <div className="avatar">
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
        <div className="author-info">
            <label className="input-creds" htmlFor="name">Author's Name</label>
            <input className="input-creds" name="name" id="name" /> <br/>
            <label className="input-creds" htmlFor="phone">Phone Number</label>
            <input className="input-creds" name="phone" id="phone"></input>
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
    return (
        <div className="about-article">
            <div className='title'></div>
            <div className='thumbnail'></div>
            <div className='abstract'></div>
        </div>
    )
}

function LeftContent() {
    return (
        <>
            <AboutAuthor />
            <AboutArticle />
        </>
    )
}

export default LeftContent
