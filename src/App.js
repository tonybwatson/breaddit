import './App.css';
import MyNavbar from './components/MyNavbar'
import Home from './pages/Home'
import Post from './pages/Post'
import Subreaddit from './pages/Subreaddit'
import axiosHelper from './utilities/axiosHelper'
import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom'

function App() {
	const [subId, setSubId] = useState(0)
	const [posts, setPosts] = useState([])
	const savePosts = (res) => {
		// console.log({res})
		setPosts(res.data.data)
	}
	useEffect(() => {
		getPosts()
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	const getPosts = () => axiosHelper({ route: 'posts', method: 'get', successMethod: savePosts })

	const [token, setToken] = useState('')
	useEffect(() => {
		let lstoken = window.localStorage.getItem('token')
		if (lstoken) {
			setToken(lstoken)
		}
	}, [])


	const [userData, setUserData] = useState({})

	const saveUserData = (res) => {
		// console.log(res)
		setUserData(res.data)
	}
	useEffect(() => {
		if (token.length > 0) {
			axiosHelper({ route: 'users', method: 'get', successMethod: saveUserData })
		}
	}, [token])
	// console.log(userData)
	return (

		<Routes>
			<Route path="/" element={<MyNavbar setToken={setToken} token={token} userName={userData.user_name} />}>
				<Route index element={<Home posts={posts} userData={userData} getPosts={getPosts}/>} />
				<Route path="br/:subreaddit" element={<Subreaddit posts={posts} setSubId={setSubId} subId={subId} userData={userData} getPosts={getPosts} />} />
				<Route path="br/:subreaddit/:postid" element={<Post posts={posts} userData={userData} getPosts={getPosts} />} />
				{/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
				<Route path="*" element={<Home posts={posts} userData={userData} getPosts={getPosts} />} />
			</Route>
		</Routes>
	);
}
export default App;