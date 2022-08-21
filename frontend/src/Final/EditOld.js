import './CreateNew.css'
import React, { useState, useLayoutEffect } from 'react'
import socket from '../config/socket'
import { useNavigate } from 'react-router-dom'

function EditOld({ setOverlay, edit_this }) {
    const [message, setMessage] = useState('')
    const [value, setValue] = useState(1)
    const navigate = useNavigate()
    const article = edit_this

    const Message = ({ message, setMessage }) => {
        setTimeout(() => {
            setMessage('')
            setOverlay('none')
            navigate('/')
        }, 5000)
        return (
            <div
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
            <>
                <input
                    className="create-new"
                    width="100%"
                    placeholder="Please enter the title of your article."
                    value={title}
                    onChange={(event) => setTitle(event.target.value)}
                    onBlur={() => {
                        article.title = title
                    }}
                />
            </>
        )
    }

    // Abstract of the post. (Text Area)
    const Abstract = () => {
        const [abstract, setAbstract] = useState('')
        useLayoutEffect(() => {
            setAbstract(article.abstract)
        }, [])
        return (
            <>
                <textarea
                    className="create-new"
                    width="100%"
                    placeholder="Please give the abstract of your article."
                    value={abstract}
                    onChange={(event) => setAbstract(event.target.value)}
                    onBlur={() => {
                        article.abstract = abstract
                    }}
                ></textarea>
            </>
        )
    }

    // Update the blog post using socket.io
    const update_blog = () => {
        socket.emit('update-post', { ...article })
    }
    socket.on('post-updated', (data) => {
        setMessage(data.msg)
        setOverlay('none')
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
        setOverlay('none')
    })
    socket.on('unable-to-delete-post', (data) => {
        setMessage(data.msg)
    })

    return (
        <div className="overlay-container">
            {message ? (
                <Message message={message} setMessage={setMessage} />
            ) : (
                ''
            )}
            <div className="new-blog-cont">
                <div className="cancel">
                    <span
                        className="x"
                        onClick={() => {
                            setOverlay(false)
                        }}
                        color="white"
                    >
                        X
                    </span>
                </div>
                <div className="form">
                    <div className="create-new-body">
                        <Title />
                        <Abstract />
                    </div>
                </div>
                <div className="footer">
                    <button
                        style={{ backgroundColor: 'grey' }}
                        onClick={() =>
                            value === 1
                                ? setOverlay(false)
                                : setValue(value - 1)
                        }
                    >
                        {/* {{ 1: 'Cancel' }[value] || 'Back'} */} Cancel
                    </button>
                    <button
                        style={{ backgroundColor: 'green' }}
                        onClick={() =>
                            value === 1 ? update_blog() : setValue(value + 1)
                        }
                    >
                        {/* {{ 3: 'Register' }[value] || 'Next'} */} Update
                    </button>
                    <button
                        style={{ backgroundColor: 'red' }}
                        onClick={() =>
                            value === 1 ? delete_blog() : setValue(value + 1)
                        }
                    >
                        {/* {{ 3: 'Register' }[value] || 'Next'} */} Delete
                    </button>
                </div>
            </div>
        </div>
    )
}

export default EditOld
