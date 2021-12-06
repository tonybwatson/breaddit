import React, { useState } from 'react'
// import axios from 'axios'
// import { Button, Card, Form, FormControl, Modal } from 'react-bootstrap'
import CreateSub from './CreateSub'

export default function Sidebar(props) {
    const [show, setShow] = useState(false);
    

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return (
        <>
            {/* <Card bg="dark" border="white">
                <Form className="d-flex" onSubmit={handleSubmit} controlId="formBasicName">
                <Form.Control type="text"
                        // id="email"
                        placeholder="Subreaddit name"
                        onChange={handleChange}
                        defaultValue={subName}
                    />
                </Form>
            </Card>
            <Card bg="dark" border="white">
                <Button variant="dark">Submit a new post</Button>
            </Card> */}


            <CreateSub />


        </>
    )
}
