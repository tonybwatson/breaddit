import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Loading from '../components/Loading'
import Sidebar from '../components/Sidebar'
import PostCard from '../components/PostCard'
import SidebarUnauth from '../components/SidebarUnauth'

export default function Home(props) {
    return props.posts.length > 0  && localStorage.getItem('token')  ? (
        <Container>
            <Row>
                <Col xs={10}>
                    {props.posts.map((post, i) => <PostCard key={i} post={post} home userData={props.userData}  />)}
                </Col>
                <Col xs={2}>
                    <Sidebar />
                </Col>
            </Row>
        </Container>
    ) : props.posts.length > 0 ? (
        <Container>
            <Row>
                <Col xs={10}>
                    {props.posts.map((post, i) => <PostCard key={i} post={post} home userData={props.userData} />)}
                </Col>
                <Col xs={2}>
                    <SidebarUnauth />
                </Col>
            </Row>
        </Container> 
        ) : <Loading />
}
