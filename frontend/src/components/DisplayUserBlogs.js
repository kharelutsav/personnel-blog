import React, { useState, useEffect, useLayoutEffect } from 'react'
import { Link } from 'react-router-dom'
import './DisplayBlogs.css'
import './DisplayBlogs1.css'
import { SiLinkedin, SiGmail, SiGithub, SiInstagram } from 'react-icons/si'
import { FaFacebookSquare, FaYoutube } from 'react-icons/fa'
import axios from './axios-config'
const { io } = require("socket.io-client")
const socket = io("http://localhost:4000");


function DisplayUserBlogs() {
    const [blogs, setBlogs] = useState([]);
    const email = 'email@example.com';


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
        const Abstract = ({ abstract, blog_info }) => {
            return (
                <p className="content-abstract">
                    {abstract}(
                    <a alt="" href="#">
                        read more
                    </a>
                    )(
                    <Link to="/edit-blog" state={blog_info}>
                        edit post
                    </Link>
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
                <Abstract abstract={blog_info.abstract} blog_info={blog_info}/>
            </>
        )
    }


    // Create new blog post.
    const CreateNew = () => {
        return (
            <div className='create-new'>
                <input className='search-bar' placeholder='Search Your Blogs' />
                <button className='search'>Search</button>
            </div>
        );
    }


    // Layout effect that allows axios API calls.
    useLayoutEffect(() => {
        axios
            .get('/user', {
                params: {
                    email: email
                }
            })
            .then((response) => {
                const user = response.data[0];
                const user_blogs = user.blogs;
                const user_details = { ...user }
                delete user_details.blogs
                const info = user_blogs.map((blog) => {
                    return {
                        blog_info: blog,
                        user_info: { ...user_details },
                    }
                })
                setBlogs(info);
            })
            .catch((err) => console.log(err));
    }, []);


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



// To be implemented
const UserInfo = ({ user_info }) => {

    const SocialLinks = ({ links }) => {
        const [Links, setLinks] = useState([])
        useEffect(() => {
            const social = [
                { address: '#', logo: SiLinkedin, name: 'Linkedin' },
                { address: '#', logo: FaFacebookSquare, name: 'Facebook' },
                { address: '#', logo: SiGmail, name: 'Gmail' },
                { address: '#', logo: SiGithub, name: 'GitHub' },
                { address: '#', logo: FaYoutube, name: 'Youtube' },
                { address: '#', logo: SiInstagram, name: 'Instagram' },
            ]
            social.map((record) => {
                return (record.address = links[record.name])
            })
            setLinks(social)
        }, [links])

        const Container = ({ address, logo }) => {
            const LOGO = logo
            return (
                <a
                    href={address}
                    className={address.length <= 0 ? 'anchor-disabled' : {}}
                >
                    <LOGO
                        className={
                            address.length > 0
                                ? 'disp-logos'
                                : 'disp-logos-disabled'
                        }
                    />
                </a>
            )
        }

        return (
            <div className="social-container">
                {Links.map((link, index) => {
                    return (
                        <Container
                            key={index}
                            address={link.address}
                            logo={link.logo}
                        />
                    )
                })}
            </div>
        )
    }
    return (
        <div className="user-disp-block">
            <div className="check-mate">
                <AboutUser
                    name={user_info.fullname}
                    email={user_info.email}
                    phone={user_info.phone}
                />
                <Avatar avatar={user_info.profile} />
            </div>
            <SocialLinks links={user_info.social} />
        </div>
    )
}

socket.on('blog-added', (added_post) => {
    console.log(added_post);
});
socket.on('blog-updated', (updated_post) => {
    console.log(updated_post);
});
socket.on('blog-deleted', (deleted_post) => {
    console.log(deleted_post);
});


export default DisplayUserBlogs
