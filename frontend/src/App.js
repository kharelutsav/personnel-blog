import './App.css'
// import DisplayBlogs from './components/DisplayBlogs'
// import DisplayUserBlogs from './components/DisplayUserBlogs'
// import CreateNewBlog from './components/CreateNewBlog'
// import EditOldBlog from './components/EditOldBlog'
// import Footer from './components/Footer'
import Header from './components/Header'
import Register from './Register'
// import { Routes, Route } from 'react-router-dom'
// import Account from './components/Account'
import { useState } from 'react'

function App() {
    const [overlay, setOverlay] = useState(true);
    return (
        <div className="App">
            <Header />
            {overlay ? <Register setOverlay={setOverlay}/> : ""}
            {/* <Routes>
                <Route path="/" element={<DisplayBlogs />} />
                <Route
                    path="/my-blogs"
                    element={<DisplayUserBlogs />}
                />
                <Route
                    path="/edit-blog"
                    element={<EditOldBlog />}
                />
                <Route
                    path="/create-new-blog"
                    element={<CreateNewBlog setBlogs={setBlogs} />}
                />
                <Route
                    path="/my-account"
                    element={<Account setBlogs={setBlogs} />}
                />
            </Routes> */}
            {/* <Footer /> */}
        </div>
    )
}

export default App
