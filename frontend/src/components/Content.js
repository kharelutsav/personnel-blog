import React from 'react'
import './Content.css'
import LeftContent from './LeftContent'
import RightContent from './RightContent'

function Content() {
    return (
        <div className="main-content">
            <div className="about">
                <LeftContent />
            </div>
            <div className="social-links">
                <RightContent />
            </div>
        </div>
    )
}

export default Content
