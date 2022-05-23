import './CreateNewBlog.css'
import React, { useState } from 'react'
import './LeftContent.css'
import socket from '../config/socket'

function CreateNewBlog() {
    const [message, setMessage] = useState('');
    const article = {}

    const Message = ({message, setMessage}) => {
        setTimeout(() => {
            setMessage('')
        }, 5000);
        return (
            <div className='create-new' style={{backgroundColor: 'green', color: 'white', borderRadius: '0px'}}>
                {message}
            </div>
        )
    }

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
        socket.emit('create-post', {
            article: { ...article },
            email: 'email@example.com',
        })
    }

    socket.on('post-created', (data) => {
        setMessage(data.msg)
    })

    socket.on('unable-to-create-post', (data) => {
        setMessage(data.msg)
    })


    // Render the create new blog page.
    return (
        <div className='blogs-cont'>
            {message ? <Message message={message} setMessage={setMessage}/> : ''}
            <Title />
            <Abstract />
            <button className="upload-btn" onClick={() => post_blog()}>
                Post Blog
            </button>
        </div>
    )
}

export default CreateNewBlog
