import './App.css'
import DisplayBlogs from './components/DisplayBlogs'
import CreateNewBlog from './components/CreateNewBlog'
import Footer from './components/Footer'
import Header from './components/Header'
import { Routes, Route } from 'react-router-dom'
import Account from './components/Account'

function App() {
    return (
        <div className="App">
            <Header />
            <Routes>
                <Route path="/" element={<DisplayBlogs />} />
                <Route path="/create-new-blog" element={<CreateNewBlog />} />
                <Route path="/my-account" element={<Account />} />
            </Routes>
            <Footer />
        </div>
    )
}

export default App
