import React from 'react'
import { Button, Card, Form, FormControl } from 'react-bootstrap'

export default function Sidebar() {
    return (
        <>
            <Card bg="dark" border="white">
                <Form className="d-flex">
                    <FormControl
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                    />
                </Form>
            </Card>
            <Card bg="dark" border="white">
                <Button variant="dark">Submit a new post</Button>
            </Card>
            <Card>
                <Button variant="dark">Create your own Subreaddit</Button>
            </Card>
        </>
    )
}
