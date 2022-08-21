import './App.css'
import { useState } from 'react'
import Header from './components/Header'
// import Account from './components/Account'
// import { Routes, Route } from 'react-router-dom'
import Register from './components/register_login/Register'
import DisplayBlogs from './components/fetch_display/DisplayBlogs'
import CreateEditBlog from './components/create_edit/CreateEditBlog'

function App() {
    const [overlay, setOverlay] = useState('none')
    // eslint-disable-next-line
    const [loggedin, setLoggedin] = useState(true)
    const [edit_this, setEdit_this] = useState({})
    // eslint-disable-next-line
    const [userblog, setUserblog] = useState(false)
    return (
        <div className="App">
            <Header
                setOverlay={setOverlay}
                loggedin={loggedin}
                setUserblog={setUserblog}
            />
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
            <DisplayBlogs
                setOverlay={setOverlay}
                setEdit_this={setEdit_this}
                userblog={userblog}
            />
            {/* <Routes>
                <Route path="/my-account" element={<Account />} />
            </Routes> */}
            {/* <Footer /> */}
        </div>
    )
}

export default App
