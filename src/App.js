import './App.css';
import MyNavbar from './components/MyNavbar'
import PostCard from './components/PostCard'
import axiosHelper from './utilities/axiosHelper'
import React, { useState, useEffect } from 'react';


function App() {

    const [posts, setPosts] = useState([])
    const savePosts = (res) => {
        console.log(res)
        setPosts(res.data.data)
    }

    useEffect(() => {
        axiosHelper({ route: 'posts', method: 'get', successMethod: savePosts })
    }, [])

    return (
        <div className="App">
            <MyNavbar />
            {posts.map((post, i) => <PostCard key={i} post={post} />)}
        </div>
    );
}

export default App;

