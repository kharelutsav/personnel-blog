import React from 'react'
import './DisplayBlogs.css'

const Avatar = () => {
    return (
        <div className="avatar">
            <img
                alt=""
                src="#"
                style={{
                    width: '70px',
                    height: '70px',
                    borderRadius: '2.8rem',
                }}
            />
        </div>
    )
}

const ContentInfo = () => {
    return <div className="content-disp-block"></div>
}

const UserInfo = () => {
    return (
        <div className="user-disp-block">
            <Avatar />
        </div>
    )
}

const BlogInfo = () => {
    return (
        <div className="about-blogs">
            <UserInfo />
            <ContentInfo />
        </div>
    )
}

function DisplayBlogs() {
    return (
        <>
            <div className="main-blogs">
                <div className="thumbnail-blogs">
                    <img src="" alt="" className="thumbnail-image" />
                </div>
                <BlogInfo />
            </div>
            <div className="main-blogs">
                <div className="thumbnail-blogs">
                    <img src="" alt="" className="thumbnail-image" />
                </div>
                <BlogInfo />
            </div>
            <div className="main-blogs">
                <div className="thumbnail-blogs">
                    <img src="" alt="" className="thumbnail-image" />
                </div>
                <BlogInfo />
            </div>
            <div className="main-blogs">
                <div className="thumbnail-blogs">
                    <img src="" alt="" className="thumbnail-image" />
                </div>
                <BlogInfo />
            </div>
        </>
    )
}

export default DisplayBlogs
