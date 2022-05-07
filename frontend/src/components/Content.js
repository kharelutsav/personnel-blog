import React from 'react'
import './Content.css'
import LeftContent from './LeftContent'
import RightContent from './RightContent'

function Content() {
    return (
        <div className="main">
            <div className="toggle"></div>
            <LeftContent />
            <RightContent />
        </div>
    )
}

export default Content
