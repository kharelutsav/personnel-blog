import './DisplayBlogs.css'
import './DisplayBlogs1.css'
import socket from '../../config/socket'
import axios from '../../config/axios-config'
import React, { useState, useEffect, useLayoutEffect } from 'react'
import { FaEdit } from 'react-icons/fa'

function DisplayBlogs({ setOverlay, setEdit_this, userblog }) {
    const [blogs, setBlogs] = useState([])
    const email = 'email@example.com'

    // User related information in short glimpse for now.
    const UserInfo = ({ user_info, blog_info }) => {
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
                    date: time,
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
                <AboutUser name={user_info.fullname} time={blog_info.time} />
                {userblog ? (
                    <FaEdit
                        style={{ color: 'blue', float: 'right' }}
                        onClick={() => {
                            setOverlay('edit-blog')
                            setEdit_this(blog_info)
                        }}
                    />
                ) : (
                    ''
                )}
            </div>
        )
    }

    // Content related information at glimpse for now.
    const ContentInfo = ({ blog_info }) => {
        const Abstract = ({ abstract }) => {
            return <p className="content-abstract">{abstract}</p>
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
            <div className="create-new">
                <input className="search-bar" placeholder="Search Blogs" />
                <button className="search">Search</button>
            </div>
        )
    }

    // Layout effect that allows axios API calls.
    useLayoutEffect(() => {
        userblog
            ? axios
                  .get('/')
                  .then((response) => {
                      const blogs = response.data || []
                      const data = blogs.map((blog) => {
                          const blog_info = { ...blog }
                          delete blog_info.author
                          return {
                              [blog_info._id]: {
                                  blog_info: blog_info,
                                  user_info: blog.author,
                              },
                          }
                      })
                      setBlogs(data)
                  })
                  .catch((err) => console.log(err))
            : axios
                  .get('/user', {
                      params: {
                          email: email,
                      },
                  })
                  .then((response) => {
                      const user = response.data[0]
                      const user_blogs = user.blogs
                      const user_details = { ...user }
                      delete user_details.blogs
                      const info = user_blogs.map((blog) => {
                          return {
                              [blog._id]: {
                                  blog_info: blog,
                                  user_info: { ...user_details },
                              },
                          }
                      })
                      setBlogs(info)
                  })
                  .catch((err) => console.log(err))
    }, [userblog])

    // Sockets activated when new blog post is added
    socket.on('new-blog-added', (data) => {
        const temp_blogs = [...blogs]
        temp_blogs.unshift({ [data.blog.blog_info._id]: data.blog })
        setBlogs(temp_blogs)
    })

    // Sockets activated when new blog post is updated
    socket.on('blog-updated', (data) => {
        const temp_blogs = [...blogs]
        temp_blogs.map((temp_blog) => {
            const blog_id = Object.keys(temp_blog)[0]
            if (blog_id === data.blog._id) {
                temp_blog[blog_id].blog_info = data.blog
            }
            return temp_blog
        })
        setBlogs(temp_blogs)
    })

    // Socket activated when some blog post is deleted
    socket.on('blog-deleted', (data) => {
        const temp_blogs = [...blogs]
        const updated_blogs = temp_blogs.filter((blog) => {
            return Object.keys(blog)[0] !== data.blog
        })
        setBlogs(updated_blogs)
    })

    const Test = ({ blog, index }) => {
        const [collapsed, setCollapsed] = useState(true)
        return (
            <div className={'blog-cont'} key={index}>
                <div>
                    <UserInfo
                        user_info={blog.user_info}
                        blog_info={blog.blog_info}
                    />
                    <div
                        className={
                            collapsed
                                ? 'blog-info-overflow-hidden'
                                : 'blog-info-overflow-scroll'
                        }
                    >
                        <ContentInfo blog_info={blog.blog_info} />
                    </div>
                </div>
                <p className="legend">
                    {' '}
                    <span
                        className="legend-span"
                        onClick={() => setCollapsed(!collapsed)}
                    >
                        {collapsed ? 'Expand Section' : 'Collapse Section'}
                    </span>
                </p>
            </div>
        )
    }

    // Render the user blogs
    return (
        <div className="blogs-cont">
            <CreateNew />
            {blogs.length >= 1 ? (
                blogs.map((data, index) => {
                    return <Test blog={Object.values(data)[0]} index={index} />
                })
            ) : (
                // setTimeout(() => {
                <p> Loading...</p>
                // }, 2000)
            )}
        </div>
    )
}

export default DisplayBlogs

// To be implemented
// const UserInfo = ({ user_info }) => {
//     const SocialLinks = ({ links }) => {
//         const [Links, setLinks] = useState([])
//         useEffect(() => {
//             const social = [
//                 { address: '#', logo: SiLinkedin, name: 'Linkedin' },
//                 { address: '#', logo: SiGmail, name: 'Gmail' },
//                 { address: '#', logo: SiGithub, name: 'GitHub' },
//                 { address: '#', logo: FaYoutube, name: 'Youtube' },
//                 { address: '#', logo: SiInstagram, name: 'Instagram' },
//             ]
//             social.map((record) => {
//                 return (record.address = links[record.name])
//             })
//             setLinks(social)
//         }, [links])

//         const Container = ({ address, logo }) => {
//             const LOGO = logo
//             return (
//                 <a
//                     href={address}
//                     className={address.length <= 0 ? 'anchor-disabled' : {}}
//                 >
//                     <LOGO
//                         className={
//                             address.length > 0
//                                 ? 'disp-logos'
//                                 : 'disp-logos-disabled'
//                         }
//                     />
//                 </a>
//             )
//         }

//         return (
//             <div className="social-container">
//                 {Links.map((link, index) => {
//                     return (
//                         <Container
//                             key={index}
//                             address={link.address}
//                             logo={link.logo}
//                         />
//                     )
//                 })}
//             </div>
//         )
//     }
//     return (
//         <div className="user-disp-block">
//             <div className="check-mate">
//                 <AboutUser
//                     name={user_info.fullname}
//                     email={user_info.email}
//                     phone={user_info.phone}
//                 />
//                 <Avatar avatar={user_info.profile} />
//             </div>
//             <SocialLinks links={user_info.social} />
//         </div>
//     )
// }
