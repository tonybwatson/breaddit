import React from 'react'
import { Card } from 'react-bootstrap'

export default function CommentList(props) {

    const commentMapper = () => {
        return props.comments.map((comment, index) => {
            return (
                <>
                    <Card.Text key={index}><u>{comment.user.user_name} at <em>{comment.updated_at}</em></u></Card.Text>
                    <Card.Text key={index}>{comment.content}</Card.Text>
                </>
            )
        })
    }

    console.log(props.comments)
    return (
        <div>
            <Card variant="dark">
                <h2>Comments</h2>
                {commentMapper()}
            </Card>
        </div>
    )
}
