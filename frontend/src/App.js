import './App.css'
import DisplayBlogs from './components/DisplayBlogs'
import CreateNewBlog from './components/CreateNewBlog'
import Footer from './components/Footer'
import Header from './components/Header'
import { Routes, Route } from 'react-router-dom'
import Account from './components/Account'
import { useState, useEffect } from 'react'
import axios from './components/axios-config'

function App() {
    const [blogs, setBlogs] = useState(0)
    useEffect(() => {
        axios
            .get('/')
            .then((response) => {
                setBlogs(response.data)
            })
            .catch((err) => console.log(err))
    }, [])

    return (
        <div className="App">
            <Header />
            <Routes>
                <Route path="/" element={<DisplayBlogs blogs={blogs} />} />
                <Route
                    path="/create-new-blog"
                    element={<CreateNewBlog setBlogs={setBlogs} />}
                />
                <Route
                    path="/my-account"
                    element={<Account setBlogs={setBlogs} />}
                />
            </Routes>
            <Footer />
        </div>
    )
}

export default App
