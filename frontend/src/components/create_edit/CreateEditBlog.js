import './CreateEditBlog.css'
import React, { useState } from 'react'
import socket from '../../config/socket'

function CreateEditBlog({
    setOverlay,
    edit_this,
    overlay,
    setMessage,
    message,
}) {
    const [value, setValue] = useState(1)
    let edit = overlay === 'edit-blog' ? true : false
    const article = edit ? edit_this : {}

    // Title of the blog post. Required*
    const Title = () => {
        const [title, setTitle] = useState(article.title || '')
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
        const [abstract, setAbstract] = useState(article.abstract || '')
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

    // Create/post the blog using axios to make remote api calls.
    const post_blog = () => {
        socket.emit('create-post', {
            article: { ...article },
            email: 'email@example.com',
        })
    }
    socket.on('post-created', (data) => {
        setMessage([...message, data.msg])
        setOverlay('none')
    })
    socket.on('unable-to-create-post', (data) => {
        setMessage([...message, data.msg])
    })

    // Update the blog post using socket.io
    const update_blog = () => {
        socket.emit('update-post', { ...article })
    }
    socket.on('post-updated', (data) => {
        setMessage([...message, data.msg])
        setOverlay('none')
    })
    socket.on('unable-to-update-post', (data) => {
        setMessage([...message, data.msg])
    })

    // Delete the blog post using socket.io
    const delete_blog = () => {
        socket.emit('delete-post', {
            article: { ...article },
            email: 'email@example.com',
        })
    }
    socket.on('post-deleted', (data) => {
        setMessage([...message, data.msg])
        setOverlay('none')
    })
    socket.on('unable-to-delete-post', (data) => {
        setMessage([...message, data.msg])
    })

    return (
        <div className="overlay-container">
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
                        Cancel
                    </button>
                    <button
                        style={{ backgroundColor: 'green' }}
                        onClick={() => (edit ? update_blog() : post_blog())}
                    >
                        {edit ? 'Update' : 'Create'}
                    </button>
                    {edit ? (
                        <button
                            style={{ backgroundColor: 'red' }}
                            onClick={() => delete_blog()}
                        >
                            Delete
                        </button>
                    ) : (
                        ''
                    )}
                </div>
            </div>
        </div>
    )
}

export default CreateEditBlog
