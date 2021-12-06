import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Loading from '../components/Loading'
import Sidebar from '../components/Sidebar'
import PostCard from '../components/PostCard'

export default function Home(props) {
    return props.posts.length > 0 ? (
        <Container>
            <Row>
                <Col xs={10}>
                    {props.posts.map((post, i) => <PostCard key={i} post={post} home />)}
                </Col>
                <Col xs={2}>
                    <Sidebar />
                </Col>
            </Row>
        </Container>
    ) : <Loading />
}
