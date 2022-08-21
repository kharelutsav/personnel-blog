import './App.css'
import DisplayBlogs from './components/DisplayBlogs'
import DisplayUserBlogs from './components/DisplayUserBlogs'
import Header from './components/Header'
import Register from './Final/Register'
import { Routes, Route } from 'react-router-dom'
import Account from './components/Account'
import { useState } from 'react'
import CreateEditBlog from './Final/CreateEditBlog'

function App() {
    const [overlay, setOverlay] = useState('none')
    // eslint-disable-next-line
    const [loggedin, setLoggedin] = useState(true)
    const [edit_this, setEdit_this] = useState({})
    return (
        <div className="App">
            <Header setOverlay={setOverlay} loggedin={loggedin} />
            {overlay === 'register' ? <Register setOverlay={setOverlay} /> : ''}
            {overlay === 'create-new' || overlay === 'edit-blog' ? (
                <CreateEditBlog
                    setOverlay={setOverlay}
                    edit_this={edit_this}
                    overlay={overlay}
                />
            ) : (
                ''
            )}
            <Routes>
                <Route path="/" element={<DisplayBlogs />} />
                <Route
                    path="/my-blogs"
                    element={
                        <DisplayUserBlogs
                            setOverlay={setOverlay}
                            setEdit_this={setEdit_this}
                        />
                    }
                />
                <Route path="/my-account" element={<Account />} />
            </Routes>
            {/* {/* <Footer /> */}
        </div>
    )
}

export default App
