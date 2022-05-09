import './CreateNewBlog.css'
import React, { useState } from 'react'
import { BsCardImage } from 'react-icons/bs'
import './LeftContent.css'
import axios from './axios-config'

function CreateNewBlog({ setBlogs }) {
    const article = {}
    const Thumbnail = () => {
        const [showThumbnail, setShowThumbnail] = useState()
        const imageSelected = (event) => {
            const [file] = event.target.files
            setShowThumbnail(URL.createObjectURL(file))
            article.thumbnail = file.name
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

    const Title = () => {
        const [title, setTitle] = useState('')
        return (
            <div className="title-container">
                <input
                    className="title"
                    width="100%"
                    placeholder="Please enter the title of your article."
                    value={title}
                    onChange={(event) => setTitle(event.target.value)}
                    onBlur={() => {
                        article.title = title
                    }}
                />
            </div>
        )
    }

    const Abstract = () => {
        const [abstract, setAbstract] = useState('')
        return (
            <div className="abstract-container">
                <textarea
                    className="abstract"
                    width="100%"
                    placeholder="Please give the abstract of your article."
                    value={abstract}
                    onChange={(event) => setAbstract(event.target.value)}
                    onBlur={() => {
                        article.abstract = abstract
                    }}
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

    const post_blog = () => {
        console.log(article)
        axios
            .post('/create-post', {
                article: { ...article },
                email: 'kharelutsav4@gmail.com',
            })
            .then((response) => {
                setBlogs(response.data)
            })
            .catch((err) => console.log(err))
    }

    return (
        <div className="main-content">
            <div className="about">
                <AboutArticle />
                <button className="upload-btn" onClick={() => post_blog()}>
                    Post Blog
                </button>
            </div>
        </div>
    )
}

export default CreateNewBlog
