import React, { useEffect, useState } from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import Loading from '../components/Loading'
import axiosHelper from '../utilities/axiosHelper'
import PostCard from '../components/PostCard'
import Sidebar from '../components/Sidebar'
import SidebarUnauth from '../components/SidebarUnauth'

export default function Subreaddit(props) {
	console.log({props})
	const [posts, setPosts] = useState([])
	const [loading, setLoading] = useState(true)
	// let subId = props.subId;
	const savePosts = (res) => {
		console.log(res)
		props.setSubId(res.data.subreaddit[0].id);
		// console.log(subId)
		setPosts(res.data.posts)
		setLoading(false)
	}

	let { subreaddit } = useParams();
	useEffect(() => {
		setLoading(true)
		axiosHelper({ route: 'posts_by_sub/' + subreaddit, method: 'get', successMethod: savePosts });
		// console.log(subreaddit);
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [subreaddit])


	// var tmpPosts = [];
	// if (posts !== undefined) {
	// 	tmpPosts = posts;
	// };
	// console.log(tmpPosts)

	return (
		<Container>
			<Row><h1>Viewing br/{subreaddit}</h1></Row>
			<Row>
				<Col xs={10}>
					{loading ? <Loading /> : (posts.length > 0
						? posts.map((post, i) => <PostCard key={i} post={post} subreaddit userData={props.userData} />)
						: <p className='text-white'>No Posts To Show - Be the first to create a post!</p>)
					}
				</Col>
				<Col xs={2}>
					{localStorage.getItem('token') ? <Sidebar subId={props.subId} posts={posts} /> : <SidebarUnauth />}
				</Col>
			</Row>
		</Container>
	)
}
