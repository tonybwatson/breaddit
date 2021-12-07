import React, { useState } from 'react'
import { Button, Card, Col, Form, Modal, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import upvote from '../img/upvote.png'
import downvote from '../img/downvote.png'
import CommentList from './CommentList'
import CommentButton from './CommentButton'
import axios from 'axios'

export default function PostCard({ post, home, postPage, subreaddit }) {
// console.log({post})
    return (
        <div>
            <Card className="d-flex justify-content-center"
                bg="dark"
                text="white"
                border="white"
                style={{ width: '90%' }}>
                <Card.Body>
                    <Row>
                        <Col xs={1}>
                            <img src={upvote} alt="upvote button" className="arrow"></img>
                            <p>405</p>
                            <img src={downvote} alt="downvote button" className="arrow"></img>
                        </Col>
                        <Col>
                            {postPage ? <Card.Title >{post.title}</Card.Title>
                                : <Card.Title as={Link} to={`/br/${post.subreaddit.name}/${post.id}`}>{post.title}</Card.Title>
                            }
                        </Col>
                        {home &&
                            <Col>
                                <Card.Header as={Link} to={`/br/${post.subreaddit.name}`}>Posted in br/{post.subreaddit.name}</Card.Header>
                            </Col>
                        }
                        {postPage &&
                            <Col>
                                <Card.Header as={Link} to={`/br/${post.subreaddit.name}`}>Posted in br/{post.subreaddit.name}</Card.Header>
                            </Col>
                        }
                    </Row>
                    <Card.Text>
                        {post.content}
                    </Card.Text>
                    <Row>
                        <Col>
                            {home &&
                                <Button as={Link} to={`/br/${post.subreaddit.name}/${post.id}`} variant="dark">Comments</Button>
                            }
                            {subreaddit &&
                                <Button as={Link} to={`/br/${post.subreaddit.name}/${post.id}`} variant="dark">Comments</Button>
                            }
                            {postPage &&
                                <>
                                    <CommentButton post={post}/>
                                </>
                            }
                            <Button href="#" variant="dark">Share</Button>
                        </Col>
                        {home &&
                            <Col>
                                <Button href="#" variant="dark">Join br/{post.subreaddit.name}</Button>
                            </Col>
                        }
                    </Row>
                    <Card.Text>Posted by {post.user.user_name}</Card.Text>
                </Card.Body>
            </Card>
            {postPage &&
                <CommentList comments={post.comments} />
            }
            <br></br>
        </div>
    )
}

