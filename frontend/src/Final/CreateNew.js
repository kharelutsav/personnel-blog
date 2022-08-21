import './CreateNew.css'
import React, { useState } from 'react'
import socket from '../config/socket'
import { useNavigate } from 'react-router-dom'

function CreateNew({ setOverlay }) {
    const [message, setMessage] = useState('')
    const article = {}
    const [value, setValue] = useState(1)
    const navigate = useNavigate()

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
        setMessage(data.msg)
    })

    socket.on('unable-to-create-post', (data) => {
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
                        onClick={() =>
                            value === 1
                                ? setOverlay(false)
                                : setValue(value - 1)
                        }
                    >
                        {/* {{ 1: 'Cancel' }[value] || 'Back'} */} Cancel
                    </button>
                    <button
                        onClick={() =>
                            value === 1 ? post_blog() : setValue(value + 1)
                        }
                    >
                        {/* {{ 3: 'Register' }[value] || 'Next'} */} Create
                    </button>
                </div>
            </div>
        </div>
    )
}

export default CreateNew

// const Case2 = () => {
//     const Container = ({ name, alias, logo }) => {
//         const [link, setLink] = useState(USER[alias] || '')
//         const LOGO = logo
//         useEffect(() => {
//             USER[alias] = link
//         })
//         return (
//             <div className="container">
//                 <LOGO className="logos" />
//                 <input
//                     style={{ display: 'block' }}
//                     placeholder={name}
//                     className="links"
//                     name={alias}
//                     value={link}
//                     onChange={(e) => setLink(e.target.value)}
//                 />
//             </div>
//         )
//     }
//     return (
//         <>
//             <p>Your social media links.</p>
//             {SOCIAL_MEDIA.map((media, index) => {
//                 return (
//                     <Container
//                         key={index}
//                         name={media.name}
//                         alias={media.alias}
//                         logo={media.logo}
//                     />
//                 )
//             })}
//         </>
//     )
// }
