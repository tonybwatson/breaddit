import React, { useEffect, useState } from 'react'
import { Col } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import axiosHelper from '../utilities/axiosHelper'
import Post from '../pages/Post'

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
    if(posts !== undefined){
        tmpPosts = posts;
    };

    return (
        
        <div>
            <Col xs={10}>
                {tmpPosts.map((post, i) => <Post key={i} posts={[]} post={post} />)}
            </Col>
        </div>
    )
}
