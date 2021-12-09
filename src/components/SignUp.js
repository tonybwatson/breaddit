import React, { useState } from 'react'
import { Container, Form, Button } from 'react-bootstrap'
import axios from 'axios'

export default function SignUp(props) {

  const [data, setData] = useState({})

  const handleSubmit = (e) => {
    e.preventDefault()
    axios({
      method: 'post',
      url: 'https://breadditlaravel-tonybwatson324900.codeanyapp.com/api/v1/users',
      data: {
        user_name: data.formBasicName,
        email: data.formBasicEmail,
        password: data.formBasicPassword,
        client_secret: 'FuhaypBi5xX4fag8QvyZlxNdtzrnWetZfMu1yv82',
        client_id: 2,
        grant_type: 'password',
        scope: ''
      },
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE',
        'Access-Control-Allow-Credentials': true,
        // 'Authorization': 'Bearer ' + 'token'
      },
    })
      .then(function (response) {
        console.log(response);
        const token = response.data.data.token
        localStorage.setItem('token', token)
        props.setToken(token)
        // console.log(response)
      })
      .catch(function (error) {
        // console.log(error);
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
      <h2>New User? Create an account!</h2>
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