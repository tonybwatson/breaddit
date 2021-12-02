import React, { useEffect, useState } from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import axiosHelper from '../utilities/axiosHelper'
import PostCard from '../components/PostCard'
import Sidebar from '../components/Sidebar'

export default function Subreaddit() {
    const [posts, setPosts] = useState([])
    const savePosts = (res) => {
        console.log(res.data)
        setPosts(res.data)
    }

    let { subreaddit } = useParams();
    useEffect(() => {
        axiosHelper({ route: 'posts_by_sub/' + subreaddit, method: 'get', successMethod: savePosts })
    }, [subreaddit])

    var tmpPosts = [];
    if (posts !== undefined) {
        tmpPosts = posts;
    };

    return (
        <Container>
            {/* <Row><h1>br/{tmpPosts[0].subreaddit.name}</h1></Row> */}
            <Row>
                <Col xs={10}>
                    {tmpPosts.map((post, i) => <PostCard key={i} post={post} subreaddit/>)}
                </Col>
                <Col xs={2}>
                    <Sidebar />
                </Col>
            </Row>
        </Container>
    )
}
