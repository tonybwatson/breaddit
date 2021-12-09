import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Loading from '../components/Loading'
import Sidebar from '../components/Sidebar'
import PostCard from '../components/PostCard'
import SidebarUnauth from '../components/SidebarUnauth'
// import InfiniteScroll from 'react-infinite-scroll-component'

export default function Home(props) {
	return props.posts.length > 0 ? (
		<Container>
			<Row>
				<Col xs={10}>
					{props.posts.map((post, i) => <PostCard key={i} post={post} home userData={props.userData} getPosts={props.getPosts} />)}
				</Col>
				<Col xs={2}>
					{localStorage.getItem('token') ? <Sidebar /> : <SidebarUnauth />}
				</Col>
			</Row>
		</Container>
	)
		: <Loading />
}
