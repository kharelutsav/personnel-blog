import React, { useState } from 'react'
import './Content.css'
import { CgProfile } from 'react-icons/cg'

const LeftComponent = () => {
    const [showImage, setShowImage] = useState()
    const imageSelected = (event) => {
        const [file] = event.target.files
        setShowImage(URL.createObjectURL(file))
    }
    return (
        <>
            <div className="about-author">
                <div className="picture">
                    <label htmlFor="profile">
                        {showImage ? (
                            <img
                                alt=""
                                src={showImage}
                                style={{ width: '70px', height: '70px' }}
                            />
                        ) : (
                            <CgProfile
                                style={{ width: '70px', height: '70px' }}
                            />
                        )}
                    </label>
                    <input
                        type="file"
                        accept="image/*"
                        style={{ display: 'none', visibility: 'none' }}
                        id="profile"
                        onChange={imageSelected}
                    ></input>
                </div>
                <div className="authors">
                    <label htmlFor="name">Author's Name</label>
                    <input className="inputCreds" name="name" id="name"></input>
                    <label htmlFor="phone">Phone Number</label>
                    <input
                        className="inputCreds"
                        name="phone"
                        id="phone"
                    ></input>
                </div>
            </div>
            <div className="about-article"></div>
        </>
    )
}

const RightComponent = () => {
    return <></>
}

function Content() {
    return (
        <div className="main">
            <div className="toggle"></div>
            <div className="about">
                <LeftComponent />
            </div>
            <div className="social-links">
                <RightComponent />
            </div>
        </div>
    )
}

export default Content
