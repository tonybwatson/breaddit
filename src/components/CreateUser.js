import React, { useState } from 'react'
import { Container, Form, Button } from 'react-bootstrap'
import axios from 'axios'

export default function InfoInput(props) {

    const [data, setData] = useState({})

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('', {
            user_name: data.formBasicName,
            email: data.formBasicEmail,
            password: data.formBasicPassword
        })
            .then(function (response) {
                console.log(response);
                const token = response.data.data.token
                localStorage.setItem('token', token)
                props.setToken(token)
                console.log(token)
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    const handleChange = (e) => {
        const newData = { ...data }
        newData[e.target.id] = e.target.value
        setData(newData)
        // console.log(newData)
    }


    return (
        <Container>
            <h1>New User? Create an account!</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="user_name"
                        // id="name"
                        placeholder="Username"
                        onChange={handleChange}
                        defaultValue={data.user_name}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email"
                        // id="email"
                        placeholder="Enter email"
                        onChange={handleChange}
                        defaultValue={data.email}
                    />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
          </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password"
                        // id="password"
                        placeholder="Password"
                        onChange={handleChange}
                        defaultValue={data.password}
                    />
                </Form.Group>

                <Button variant="dark" type="submit">
                    Sign up
        </Button>
            </Form>
        </Container>
    )
}