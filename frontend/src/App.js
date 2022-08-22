import './App.css'
import { useState } from 'react'
import ReactDOM from 'react-dom'
import Header from './components/Header'
// import Account from './components/Account'
// import { Routes, Route } from 'react-router-dom'
import Register from './components/register_login/Register'
import DisplayBlogs from './components/fetch_display/DisplayBlogs'
import CreateEditBlog from './components/create_edit/CreateEditBlog'

function App() {
    const [overlay, setOverlay] = useState('none')
    const [message, setMessage] = useState([])
    // eslint-disable-next-line
    const [loggedin, setLoggedin] = useState(true)
    const [edit_this, setEdit_this] = useState({})
    const [userblog, setUserblog] = useState(false)

    const Message = () => {
        return (
            <>
                {
                    message.map((msg, index) => {
                        return (
                            <div className='notification' key={index}>
                                {msg} <span onClick={() => setMessage([...message].filter((_msg,idx) => index !== idx))} className="close-notification" >X</span>
                            </div>
                        )
                    })
                }
            </>
        )
    }
    
    return (
        <div className="App">
            {message ? (
                ReactDOM.createPortal(
                    <Message />,
                    document.getElementById('portal')
                )
            ) : (
                ''
            )}
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
                    setMessage={setMessage}
                    message={message}
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
