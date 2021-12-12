import React from 'react'
import { useParams } from 'react-router-dom'
import Loading from '../components/Loading'
import PostCard from '../components/PostCard'
import { Container } from 'react-bootstrap'

export default function Post(props) {
    let {  postid } = useParams();
    let tmpPost = undefined;

    if (props.post !== undefined) {
        tmpPost = props.post;
    } else {
        tmpPost = props.posts.find(p => p.id === parseInt(postid));
    }
    // console.log(subreaddit)
    // console.log(tmpPost)

    return !!tmpPost ? (
        <Container xs={10}>
            <PostCard post={tmpPost} postPage  userData={props.userData} getPosts={props.getPosts}/>
        </Container>
    ) : <Loading />
}