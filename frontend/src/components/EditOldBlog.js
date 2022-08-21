// import './CreateNewBlog.css'
import React, { useLayoutEffect, useState } from 'react'
import './LeftContent.css'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import socket from '../config/socket'

function EditOldBlog() {
    const [message, setMessage] = useState(null)
    const navigate = useNavigate()
    const old_data = useLocation().state
    const article = old_data

    const Message = ({ message, setMessage }) => {
        setTimeout(() => {
            setMessage('')
            navigate('/my-blogs')
        }, 2000)
        return (
            <div
                className="create-new"
                style={{
                    backgroundColor: 'green',
                    color: 'white',
                    borderRadius: '0px',
                }}
            >
                {message}
            </div>
        )
    }

    // Title of the blog post. Required*
    const Title = () => {
        const [title, setTitle] = useState('')
        useLayoutEffect(() => {
            setTitle(article.title)
        }, [])
        return (
            <div className="create-new">
                <input
                    className="search-bar"
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
            <div className="blog-cont">
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

    // Update the blog post using socket.io
    const update_blog = () => {
        socket.emit('update-post', { ...article })
    }
    socket.on('post-updated', (data) => {
        setMessage(data.msg)
    })
    socket.on('unable-to-update-post', (data) => {
        setMessage(data.msg)
    })

    // Delete the blog post using socket.io
    const delete_blog = () => {
        socket.emit('delete-post', {
            article: { ...article },
            email: 'email@example.com',
        })
    }
    socket.on('post-deleted', (data) => {
        setMessage(data.msg)
    })
    socket.on('unable-to-delete-post', (data) => {
        setMessage(data.msg)
    })

    // Render the update/delete old blog page.
    return (
        <div className="blogs-cont">
            {message ? (
                <Message message={message} setMessage={setMessage} />
            ) : (
                ''
            )}
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
