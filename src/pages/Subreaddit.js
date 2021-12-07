import React, { useEffect, useState } from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import Loading from '../components/Loading'
import axiosHelper from '../utilities/axiosHelper'
import PostCard from '../components/PostCard'
import Sidebar from '../components/Sidebar'
import SidebarUnauth from '../components/SidebarUnauth'

export default function Subreaddit(props) {
    const [posts, setPosts] = useState([])
    let subId = props.subId;
    const savePosts = (res) => {
        
        subId = res.data[0].sub_id;
        props.setSubId(subId);
        // console.log(subId)
        setPosts(res.data)
    }

    let { subreaddit } = useParams();
    useEffect(() => {
        axiosHelper({ route: 'posts_by_sub/' + subreaddit, method: 'get', successMethod: savePosts });
        // console.log(subreaddit);
    }, [])

    var tmpPosts = [];
    if (posts !== undefined) {
        tmpPosts = posts;
    };

    return !!tmpPosts.length > 0 && localStorage.getItem('token') ? (
        <Container>
            <Row><h1>Viewing br/{tmpPosts[0]?.subreaddit?.name}</h1></Row>
            <Row>
                <Col xs={10}>
                    {tmpPosts.map((post, i) => <PostCard key={i} post={post} subreaddit/>)}
                </Col>
                <Col xs={2}>
                    <Sidebar subId={subId}/>
                </Col>
            </Row>
        </Container>
    ) : !!tmpPosts.length > 0 ? (
        <Container>
            <Row><h1>Viewing br/{tmpPosts[0]?.subreaddit?.name}</h1></Row>
            <Row>
                <Col xs={10}>
                    {tmpPosts.map((post, i) => <PostCard key={i} post={post} subreaddit/>)}
                </Col>
                <Col xs={2}>
                    <SidebarUnauth />
                </Col>
            </Row>
        </Container>
    ) : <Loading />
}
