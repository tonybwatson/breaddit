import React from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import upvote from '../img/upvote.png'
import downvote from '../img/downvote.png'

export default function PostCard({ post }) {

    return (
        <div>
            <Card className="d-flex justify-content-center"
                bg="dark"
                text="white"
                border="white"
                style={{ width: '80%' }}>
                <Card.Body>
                    <Row>
                        <Col xs={1}>
                            <img src={upvote} alt="upvote button" className="arrow"></img>
                            <p>405</p>
                            <img src={downvote} alt="downvote button" className="arrow"></img>
                        </Col>
                        <Col>
                            <Card.Title as={Link} to={`br/${post.subreaddit.name}/${post.id}`}>{post.title}</Card.Title>
                        </Col>
                        <Col>
                            <Card.Header as={Link} to={`br/${post.subreaddit.name}`}>Posted in br/{post.subreaddit.name}</Card.Header>
                        </Col>
                    </Row>
                    <Card.Text>
                        {post.content}
                    </Card.Text>
                    <Row>
                        <Col>
                            <Button as={Link} to={`br/${post.subreaddit.name}/${post.id}`} variant="dark">Comments</Button>
                            <Button href="#" variant="dark">Share</Button>
                        </Col>
                        <Col>
                            <Button href="#" variant="dark">Join</Button>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
            <br></br>
        </div>
    )
}

