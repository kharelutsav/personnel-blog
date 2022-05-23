import './CreateNewBlog.css'
import React, { useLayoutEffect, useState } from 'react'
import './LeftContent.css'
import axios from './axios-config'
import { Link, useLocation, useNavigate } from 'react-router-dom'

function EditOldBlog() {
    const navigate = useNavigate()
    const old_data = useLocation().state
    const article = old_data


    // Title of the blog post. Required*
    const Title = () => {
        const [title, setTitle] = useState('')
        useLayoutEffect(() => {
            setTitle(article.title)
        }, [])
        return (
            <div className='create-new'>
                <input
                    className='search-bar'
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


    // Abstract of the post. (Text Area)
    const Abstract = () => {
        const [abstract, setAbstract] = useState('')
        useLayoutEffect(() => {
            setAbstract(article.abstract)
        }, [])
        return (
            <div className='blog-cont'>
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


    // Update the blog using axios to make remote api calls.
    const update_blog = () => {
        axios
            .post('/update-post', { ...article })
            .then((response) => {
                navigate('/my-blogs')
            })
            .catch((err) => console.log(err))
    }


    // Delete the blog using axios to make remote api calls.
    const delete_blog = () => {
        axios
            .post('/delete-post', {
                article: { ...article },
                email: 'email@example.com',
            })
            .then((response) => {
                navigate('/my-blogs')
            })
            .catch((err) => console.log(err))
    }


    // Render the update/delete old blog page.
    return (
        <div className='blogs-cont'>
            <Title />
            <Abstract />
            <Link to="/my-blogs">
                    <button
                        className="upload-btn"
                        style={{ backgroundColor: 'grey' }}
                    >
                        Cancel
                    </button>
                </Link>
                <button
                    className="upload-btn"
                    onClick={() => update_blog()}
                    style={{ backgroundColor: 'green' }}
                >
                    Update
                </button>
                <button
                    className="upload-btn"
                    onClick={() => delete_blog()}
                    style={{ backgroundColor: 'red' }}
                >
                    Delete
                </button>
        </div>
    )
}

export default EditOldBlog
