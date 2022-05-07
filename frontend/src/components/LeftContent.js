import React, { useState } from 'react'
import { CgProfile } from 'react-icons/cg'
import { BsCardImage } from 'react-icons/bs'
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
                        style={{
                            width: '100%',
                            height: '100%',
                            borderRadius: '2.8rem',
                        }}
                    />
                ) : (
                    <CgProfile style={{ width: '100%', height: '100%' }} />
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

const AboutAuthor = () => {
    return (
        <div className="about-author">
            <Avatar />
            <AuthorInfo />
        </div>
    )
}

const Title = () => {
    return (
        <div className="title-container">
            <input
                className="title"
                width="100%"
                placeholder="Please enter the title of your article."
            />
        </div>
    )
}

const Thumbnail = () => {
    const [showThumbnail, setShowThumbnail] = useState()
    const imageSelected = (event) => {
        const [file] = event.target.files
        setShowThumbnail(URL.createObjectURL(file))
    }
    return (
        <div className="thumbnail-container">
            <label htmlFor="thumbnail">
                {showThumbnail ? (
                    <img
                        alt=""
                        src={showThumbnail}
                        style={{
                            width: '100%',
                            height: '100%',
                            borderRadius: '0.5rem',
                        }}
                    />
                ) : (
                    <BsCardImage style={{ width: '100%', height: '100%' }} />
                )}
            </label>
            <input
                type="file"
                accept="image/*"
                style={{ display: 'none', visibility: 'none' }}
                id="thumbnail"
                onChange={imageSelected}
            />
        </div>
    )
}

const Abstract = () => {
    return (
        <div className="abstract-container">
            <textarea
                className="abstract"
                width="100%"
                placeholder="Please give the abstract of your article."
            ></textarea>
        </div>
    )
}

const AboutArticle = () => {
    return (
        <div className="about-article">
            <Title />
            <Thumbnail />
            <Abstract />
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
