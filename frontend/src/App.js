import './App.css'
import DisplayBlogs from './components/DisplayBlogs'
// import Content from './components/Content'
import Footer from './components/Footer'
import Header from './components/Header'

function App() {
    return (
        <div className="App">
            <Header />
            <DisplayBlogs />
            {/* <Content /> */}
            <Footer />
        </div>
    )
}

export default App
