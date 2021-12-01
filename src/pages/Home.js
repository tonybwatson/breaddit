import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Sidebar from '../components/Sidebar'
import PostCard from '../components/PostCard'

export default function Home(props) {
    return (
        <Container>
            <Row>
                <Col xs={10}>
                    {props.posts.map((post, i) => <PostCard key={i} post={post} />)}
                </Col>
                <Col xs={2}>
                    <Sidebar />
                </Col>
            </Row>
        </Container>
    )
}
