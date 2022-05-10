import React, { useState, useEffect, useLayoutEffect } from 'react'
import { Link } from 'react-router-dom'
import './DisplayBlogs.css'
import { SiLinkedin, SiGmail, SiGithub, SiInstagram } from 'react-icons/si'
import { FaFacebookSquare, FaYoutube } from 'react-icons/fa'

const UserInfo = ({ user_info }) => {
    const AboutUser = ({ name, email, phone }) => {
        const [userInfo, setUserInfo] = useState({})
        useEffect(() => {
            setUserInfo({
                name: name,
                email: email,
                phone: phone,
            })
        }, [name, email, phone])
        return (
            <div className="about-user">
                <p className="user-creds user-name">{userInfo.name}</p>
                <p className="user-creds">{userInfo.phone}</p>
                <p className="user-creds">{userInfo.email}</p>
            </div>
        )
    }

    const Avatar = () => {
        return (
            <div className="avatar-blogs">
                <img
                    alt=""
                    src="http://localhost:3000/utsav.jpg"
                    style={{
                        width: '56px',
                        height: '56px',
                        borderRadius: '2.8rem',
                    }}
                />
            </div>
        )
    }

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

const ContentInfo = ({ blog_info }) => {
    const Abstract = ({ abstract, blog_info }) => {
        return (
            <p className="content-abstract">
                {abstract}....(
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
        <div className="content-disp-block">
            <Title title={blog_info.title} />
            <hr style={{ margin: '0px', marginLeft: '0.1rem', width: '30%' }} />
            <p
                className="user-creds"
                style={{
                    textAlign: 'left',
                    paddingBottom: '0.1rem',
                    paddingLeft: '0.1rem',
                }}
            >
                {blog_info.time}
            </p>
            <Abstract abstract={blog_info.abstract} blog_info={blog_info} />
        </div>
    )
}

function DisplayUserBlogs({ blogs }) {
    const [datas, setDatas] = useState([])
    useLayoutEffect(() => {
        const data = []
        for (let user of blogs) {
            const users = { ...user }
            delete users.blogs
            const info = user.blogs.map((blog) => {
                return {
                    blog_info: blog,
                    user_info: { ...users },
                }
            })
            data.push(...info)
        }
        setDatas(data)
    }, [blogs])

    const BlogInfo = ({ user_info, blog_info }) => {
        return (
            <div className="about-blogs">
                <UserInfo user_info={user_info} />
                <ContentInfo blog_info={blog_info} />
            </div>
        )
    }

    const Thumbnail = ({ thumbnail }) => {
        return (
            <div className="thumbnail-blogs">
                <img
                    src="http://localhost:3000/panda.jpg"
                    alt={thumbnail}
                    className="thumbnail-image"
                />
            </div>
        )
    }

    return (
        <>
            {blogs.length >= 1 ? (
                datas.map((data, index) => {
                    return (
                        <div className="main-blogs" key={index}>
                            <Thumbnail thumbnail={data.blog_info.thumbnail} />
                            <BlogInfo
                                user_info={data.user_info}
                                blog_info={data.blog_info}
                            />
                        </div>
                    )
                })
            ) : (
                <p> Loading...</p>
            )}
        </>
    )
}

export default DisplayUserBlogs
