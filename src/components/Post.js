import React from 'react'
import { Button, Card } from 'react-bootstrap'

export default function Post() {
    return (
        <div>
            <Card variant="dark" style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>Card Title</Card.Title> 
                    <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>
                    <Card.Link href="#" variant="dark">Comments</Card.Link>
                    <Card.Link href="#">Another Link</Card.Link>
                    <Button>Join</Button>
                </Card.Body>
            </Card>
        </div>
    )
}
