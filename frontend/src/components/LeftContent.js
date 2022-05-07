import React, { useState } from 'react'
import { CgProfile } from 'react-icons/cg'

function LeftContent() {
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
                        // style={{ display: 'none', visibility: 'none' }}
                        id="profile"
                        onChange={imageSelected}
                    />
                </div>
                <div className="authors">
                    <label htmlFor="name">Author's Name</label>
                    <input className="inputCreds" name="name" id="name" />
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

export default LeftContent