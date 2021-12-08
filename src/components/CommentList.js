import React from 'react'
import { Button, Card, Col, Container } from 'react-bootstrap'

export default function CommentList(props) {

    const commentMapper = () => {
        return props.comments.map((comment, index) => {
            return (
                <>
                    <Container xs={10}>
                        <Col xs={10}>
                            <Card.Text key={index}><u>Posted by {comment.user.user_name} at <em>{comment.updated_at}</em></u></Card.Text>
                            <Card.Text key={index} className="mb-1">{comment.content}</Card.Text>
                            <Button className="mb-3" variant="dark"><em>Reply to this comment</em></Button>
							{/* <DeleteButton route={'comments' type={'Your Comment'}} /> */}
                        </Col>
                    </Container>
                </>
            )
        })
    }

    console.log(props.comments)
    return (
        <div>
            <Col xs={1} className="mt-3"></Col>
            <Container>
                <Card bg="dark" text="white">
                    <h2>Comments</h2>
                    {commentMapper()}
                </Card>
            </Container>
        </div>
    )
}
