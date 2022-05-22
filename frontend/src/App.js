import './App.css'
import DisplayBlogs from './components/DisplayBlogs'
import DisplayUserBlogs from './components/DisplayUserBlogs'
import CreateNewBlog from './components/CreateNewBlog'
import EditOldBlog from './components/EditOldBlog'
import Footer from './components/Footer'
import Header from './components/Header'
import { Routes, Route } from 'react-router-dom'
import Account from './components/Account'
import { useState, useLayoutEffect } from 'react'
import axios from './components/axios-config'
const { io } = require("socket.io-client")
const socket = io("http://localhost:4000/");

function App() {
    const [blogs, setBlogs] = useState([])
    useLayoutEffect(() => {
        axios
            .get('/')
            .then((response) => {
                setBlogs(response.data || [])
            })
            .catch((err) => console.log(err))
    }, []);

    socket.on("new-updates", (updates) => {
        console.log(updates);
    });

    return (
        <div className="App">
            <Header />
            <Routes>
                <Route path="/" element={<DisplayBlogs />} />
                <Route
                    path="/my-blogs"
                    element={<DisplayUserBlogs />}
                />
                <Route
                    path="/edit-blog"
                    element={<EditOldBlog setBlogs={setBlogs} blogs={blogs} />}
                />
                <Route
                    path="/create-new-blog"
                    element={<CreateNewBlog setBlogs={setBlogs} />}
                />
                <Route
                    path="/my-account"
                    element={<Account setBlogs={setBlogs} />}
                />
            </Routes>
            {/* <Footer /> */}
        </div>
    )
}

export default App
