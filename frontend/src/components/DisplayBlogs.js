import React, { useState, useEffect, useLayoutEffect } from 'react'
import './DisplayBlogs.css'
import './DisplayBlogs1.css'
import { SiLinkedin, SiGmail, SiGithub, SiInstagram } from 'react-icons/si'
import { FaFacebookSquare, FaYoutube } from 'react-icons/fa'
import axios from './axios-config'
import socket from '../config/socket'

function DisplayBlogs() {
    const [blogs, setBlogs] = useState([]);


    // User related information in short glimpse for now.
    const UserInfo = ({user_info, time}) => {

        const Avatar = () => {
            return (
                <div className="avatar-blogs">
                    <img
                        alt=""
                        src="http://localhost:3000/mozilla-dinosaur-head.png"
                        style={{
                            width: '49px',
                            height: '49px',
                            borderRadius: '2.8rem',
                        }}
                    />
                </div>
            )
        }
        
        const AboutUser = ({ name, time }) => {
            const [userInfo, setUserInfo] = useState({})
            useEffect(() => {
                setUserInfo({
                    name: name,
                    date: time
                })
            }, [name, time])
            return (
                <div className="about-user">
                    <p className="user-creds user-name">{userInfo.name}</p>
                    <p className="user-creds">{userInfo.date}</p>
                </div>
            )
        }

        return (
            <div className="user-disp-block">
                <Avatar avatar={user_info.profile} />
                <AboutUser
                    name={user_info.fullname}
                    time={time}
                />
            </div>
        )
    }


    // Content related information at glimpse for now.
    const ContentInfo = ({ blog_info }) => {
        const Abstract = ({ abstract }) => {
            return (
                <p className="content-abstract">
                    {abstract}(
                    <a alt="" href="#">
                        read more
                    </a>
                    )
                </p>
            )
        }

        const Title = ({ title }) => {
            return <p className="content-title">{title}</p>
        }

        return (
            <>
                <Title title={blog_info.title} />
                <Abstract abstract={blog_info.abstract} />
            </>
        )
    }
    

    // Create new blog post.
    const CreateNew = () => {
        return (
            <div className='create-new'>
                <input className='search-bar' placeholder='Search Blogs' />
                <button className='search'>Search</button>
            </div>
        );
    }


    // Layout effect that allows axios API calls.
    useLayoutEffect(() => {
        axios
            .get('/')
            .then((response) => {
                const blogs = response.data || []
                const data = blogs.map(blog => {
                    const blog_info = { ...blog }
                    delete blog_info.author
                    return {
                        blog_info: blog_info,
                        user_info: blog.author,
                    }

                })
                setBlogs(data)
            })
            .catch((err) => console.log(err))
    }, []);


    // Sockets
    socket.on('new-blog-added', (data) => {
        const temp_blogs = [...blogs]
        temp_blogs.unshift(data.blog)
        setBlogs(temp_blogs)
    })


    // Render the user blogs
    return (
        <div className='blogs-cont'>
            <CreateNew />
            {blogs.length >= 1 ? (
                blogs.map((data, index) => {
                    return (
                        <div className='blog-cont' key={index}>
                            <UserInfo
                                user_info={data.user_info}
                                time={data.blog_info.time}
                            />
                            <ContentInfo 
                                blog_info={data.blog_info}
                            />
                        </div>
                    )
                })
            ) : (
                <p> Loading...</p>
            )}
        </div>
    );
}

export default DisplayBlogs
