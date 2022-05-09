import './CreateNewBlog.css'
import React, { useState } from 'react'
import { BsCardImage } from 'react-icons/bs'
import './LeftContent.css'

function CreateNewBlog() {
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
                        <BsCardImage
                            style={{ width: '100%', height: '100%' }}
                        />
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
                <Thumbnail />
                <Title />
                <Abstract />
            </div>
        )
    }

    return (
        <div className="main-content">
            <div className="about">
                <AboutArticle />
            </div>
        </div>
    )
}

export default CreateNewBlog
