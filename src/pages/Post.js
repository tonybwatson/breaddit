import React from 'react'
import { useParams } from 'react-router-dom'
import PostCard from '../components/PostCard'

export default function Post(props) {
    let { subreaddit, postid } = useParams();
    let tmpPost = undefined;
    if (props.post !== undefined) {
        tmpPost = props.post;
    } else {
        tmpPost = props.posts.find(p => p.id === parseInt(postid));
    }
    // console.log(subreaddit)
    console.log(tmpPost)

    return !!tmpPost ? (
        <PostCard post={tmpPost} postPage />
    ) : <><h1>loafing</h1></> 

}
