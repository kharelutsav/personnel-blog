import './App.css'
import DisplayBlogs from './components/DisplayBlogs'
import DisplayUserBlogs from './components/DisplayUserBlogs'
import EditOldBlog from './components/EditOldBlog'
import Header from './components/Header'
import Register from './Final/Register'
import CreateNew from './Final/CreateNew'
import { Routes, Route } from 'react-router-dom'
import Account from './components/Account'
import { useState } from 'react'

function App() {
    const [overlay, setOverlay] = useState('none')
    const [loggedin, setLoggedin] = useState(true)
    return (
        <div className="App">
            <Header setOverlay={setOverlay} loggedin={loggedin} />
            {overlay === 'register' ? <Register setOverlay={setOverlay} /> : ''}
            {overlay === 'create-new' ? (
                <CreateNew setOverlay={setOverlay} />
            ) : (
                ''
            )}
            <Routes>
                <Route path="/" element={<DisplayBlogs />} />
                <Route path="/my-blogs" element={<DisplayUserBlogs />} />
                <Route path="/edit-blog" element={<EditOldBlog />} />
                <Route path="/my-account" element={<Account />} />
            </Routes>
            {/* {/* <Footer /> */}
        </div>
    )
}

export default App
