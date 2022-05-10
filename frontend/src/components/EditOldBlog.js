import './CreateNewBlog.css'
import React, { useLayoutEffect, useState } from 'react'
import { BsCardImage } from 'react-icons/bs'
import './LeftContent.css'
import axios from './axios-config'
import { Link, useLocation, useNavigate } from 'react-router-dom'

function EditOldBlog({ setBlogs, blogs }) {
    const navigate = useNavigate()
    const old_data = useLocation().state
    const article = old_data
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
        useLayoutEffect(() => {
            setTitle(article.title)
        }, [])
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
        useLayoutEffect(() => {
            setAbstract(article.abstract)
        }, [])
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

    const update_blog = () => {
        axios
            .post('/update-post', { ...article })
            .then((response) => {
                navigate('/my-blogs')
            })
            .catch((err) => console.log(err))
    }

    const delete_blog = () => {
        axios
            .post('/delete-post', {
                article: { ...article },
                email: 'email@example.com',
            })
            .get('./')
            .then((response) => {
                setBlogs(response.data)
                navigate('/my-blogs')
            })
            .catch((err) => console.log(err))
    }

    return (
        <div className="main-content">
            <div className="about">
                <AboutArticle />
                <Link to="/my-blogs">
                    <button
                        className="upload-btn"
                        style={{ backgroundColor: 'grey' }}
                    >
                        Cancel Update
                    </button>
                </Link>
                <button
                    className="upload-btn"
                    onClick={() => update_blog()}
                    style={{ backgroundColor: 'green' }}
                >
                    Update Blog
                </button>
                <button
                    className="upload-btn"
                    onClick={() => delete_blog()}
                    style={{ backgroundColor: 'red' }}
                >
                    Delete Blog
                </button>
            </div>
        </div>
    )
}

export default EditOldBlog
