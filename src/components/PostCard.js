import React from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'
import upvote from '../img/upvote.png'
import downvote from '../img/downvote.png'

export default function PostCard({post}) {

    return (
        <div>
            <Card className="d-flex justify-content-center"
                variant="dark"
                style={{ width: '80%' }}>
                <Card.Body>
                    <Row>
                        <Col xs={1}>
                            <img src={upvote} alt="upvote button" className="arrow"></img>
                            <p>405</p>
                            <img src={downvote} alt="downvote button" className="arrow"></img>
                        </Col>
                        <Col>
                            <Card.Title>{post.title}</Card.Title>
                        </Col>
                        <Col>
                            <Card.Header>br/{post.subreaddit.name}</Card.Header>
                        </Col>
                    </Row>

                    <Card.Text>
                        Some quick example text to build on the post title and start the conversation/give information on the link.
                    </Card.Text>
                    <Row>
                        <Col>
                            <Button href="#" variant="dark">Comments</Button>
                            <Button href="#" variant="dark">Share</Button>
                        </Col>
                        <Col>
                            <Button href="#" variant="dark">Join</Button>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </div>
    )
}

