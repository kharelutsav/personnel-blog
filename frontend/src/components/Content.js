import React from 'react'
import './Content.css'

const LeftComponent = () => {
    return (
        <div className='about'>
            <div className='about-author'></div>
            <div className='about-article'></div>
        </div>
    )
}

const RightComponent = () => {
    return (
        <div className='social-links'></div>
    )
}

function Content() {
    return (
        <div className="main">
            <div className='toggle'></div>
            <LeftComponent />
            <RightComponent />
        </div>
    )
}

export default Content
