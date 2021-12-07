import React, { useState } from 'react'
import axios from 'axios'
import { Button, Card, Form, Modal } from 'react-bootstrap'

export default function SingleModalForm(route, modalButtonText, placeHolderText) {
    const [show, setShow] = useState(false);
    const [text, setText] = useState('');
    const token = localStorage.getItem('token');

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    // var route = '';
    // var modalButtonText = '';
    // var placeHolderText = '';


    const handleSubmit = (e) => {
        e.preventDefault()
        axios({
            method: 'post',
            url: 'https://breadditlaravel-tonybwatson324900.codeanyapp.com/api/v1/' + route,
            data: {
                name: text,
            },
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE',
                'Access-Control-Allow-Credentials': true,
                'Authorization': 'Bearer ' + token
            },
        })
            .then(function (response) {
                console.log(response);
                handleClose();
                // console.log(response)
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    const handleChange = (e) => {
        const newtext = e.target.value
        setText(newtext)
        // console.log(newtext)
    }

    return (
        <div>

            <Card>
                <Button variant="dark" onClick={handleShow}>
                    {/* {modalButtonText} */}
                </Button>
            </Card>
            <Modal show={show} onHide={handleClose} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Create a Subreaddit</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlid="formtext">
                            <Form.Control type="name"
                                placeholder={placeHolderText}
                                onChange={handleChange}
                                value={text.name}
                            />
                        </Form.Group>
                    </Form>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="dark" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button variant="dark" onClick={handleSubmit}>
                        Create
                    </Button>
                </Modal.Footer>
            </Modal>

        </div>
    )
}
