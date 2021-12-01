import React from 'react'
import {  useParams } from 'react-router-dom';
import {Col, Row, Card, Button } from 'react-bootstrap'
import upvote from '../img/upvote.png'
import downvote from '../img/downvote.png'

export default function Post(props) {
    let {subreaddit, postid} = useParams();
    const post = props.posts.find(p => p.id === parseInt(postid))
    console.log(post)
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
                            <Card.Title >{post.title}</Card.Title>
                        </Col>
                        <Col>
                            <Card.Header>Posted in br/{post.subreaddit.name}</Card.Header>
                        </Col>
                    </Row>
                     <Card.Text>
                         {post.content}
                     </Card.Text>
                    <Row>
                        <Col>
                            <Button href="#" variant="dark">Comment</Button>
                            <Button href="#" variant="dark">Share</Button>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
            <Card>
                Comments
            </Card>
        </div>
    )
}
