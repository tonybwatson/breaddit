import './App.css';
import MyNavbar from './components/MyNavbar'
import Home from './pages/Home'
import Post from './pages/Post'
import Subreaddit from './pages/Subreaddit'
import axiosHelper from './utilities/axiosHelper'
import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom'

function App() {
    const [token, setToken] = useState('')
    const [posts, setPosts] = useState([])
    const savePosts = (res) => {
        // console.log(res)
        setPosts(res.data.data)
    }

    useEffect(() => {
        axiosHelper({ route: 'posts', method: 'get', successMethod: savePosts })
    }, [])

    return (

        <Routes>
            <Route path="/" element={<MyNavbar setToken={setToken} token={token}/>}>
                <Route index element={<Home posts={posts} />} />
                <Route path="br/:subreaddit" element={<Subreaddit />} />
                <Route path="br/:subreaddit/:postid" element={<Post posts={posts} /> } />
                {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
                {/* <Route path="*" element={<NoMatch />} /> */}
            </Route>
        </Routes>
    );
}

export default App;

