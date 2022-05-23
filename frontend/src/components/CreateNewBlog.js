import './CreateNewBlog.css'
import React, { useState } from 'react'
import './LeftContent.css'
import axios from './axios-config'
import { useNavigate } from 'react-router-dom'

function CreateNewBlog({ setBlogs }) {
    const navigate = useNavigate()
    const article = {}


    // Title of the blog post. Required*
    const Title = () => {
        const [title, setTitle] = useState('')
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


    // Create/post the blog using axios to make remote api calls.
    const post_blog = () => {
        axios
            .post('/create-post', {
                article: { ...article },
                email: 'email@example.com',
            })
            .then(() => {
                navigate('/my-blogs')
            })
            .catch((err) => console.log(err))
    }


    // Render the create new blog page.
    return (
        <div className='blogs-cont'>
            <Title />
            <Abstract />
            <button className="upload-btn" onClick={() => post_blog()}>
                Post Blog
            </button>
        </div>
    )
}

export default CreateNewBlog
