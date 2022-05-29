import React, {useState} from 'react'
import './Register.css'
import { SiLinkedin, SiGithub, SiInstagram } from 'react-icons/si'
import { FaYoutube } from 'react-icons/fa'

function Register({setOverlay}) {
    const [value, setValue] = useState(1);

    const SOCIAL_MEDIA = [
        { name: 'Linkedin', logo: SiLinkedin },
        { name: 'Instagram', logo: SiInstagram },
        { name: 'Youtube', logo: FaYoutube },
        { name: 'GitHub', logo: SiGithub }
    ]

    const Case1 = () => {
        return (
            <>
                <p>Login credentials</p>
                <input placeholder='username'/>
                <input type='password' placeholder='password'/>
                <input placeholder='email'/>
                <input placeholder='phone'/>
            </>
        )
    }

    const Case2 = () => {
        const Container = ({ name, logo }) => {
            const [link, setLink] = useState('')
            const LOGO = logo
            return (
                <div className="container">
                    <LOGO className="logos" />
                    <input
                        style={{ display: 'block' }}
                        placeholder={name}
                        className="links"
                        name={name}
                        value={link}
                        onChange={(event) => setLink(event.target.value)}
                    />
                </div>
            )
        }
        return (
            <>
                <p>Your social media links.</p>
                {SOCIAL_MEDIA.map((media, index) => {
                    return (
                        <Container
                            key={index}
                            name={media.name}
                            logo={media.logo}
                        />
                    )
                })}                
            </>
        )
    }

    const Case3 = () => {
        return (
            <>
                <p>Tell us some thing about yourself.</p>
                <textarea placeholder='Networking enthusiast with over 10 years of experience in software development and system admin....'></textarea>
            </>
        )
    }

  return (
    <div className='overlay-container'>
        <div className='login-register-cont'>
            <div className='cancel'>
                <span className='x' onClick={() => {setOverlay(false)}}>X</span>
            </div>
            <div className='form'>
                <div className='body'>
                    {
                        {
                            1: <Case1 />,
                            2: <Case2 />,
                            3: <Case3 />
                        }[value]
                    }
                </div>
                <div className='footer'>
                    <button onClick={() => setValue(value - 1)}>
                        {{1: 'Cancel'}[value] || 'Back'}
                    </button>
                    <button onClick={() => setValue(value + 1)}>
                        {{4: 'Register'}[value] || 'Next'}
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Register