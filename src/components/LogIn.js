import React, { useState } from 'react'
import { Form, Button, Container } from 'react-bootstrap'
import axios from 'axios'

export default function LoginInput(props) {

	const [data, setData] = useState({})

	const handleSubmit = (e) => {
		e.preventDefault()
		axios.post('https://aincbootcampapi-ianrios529550.codeanyapp.com/api/auth/login', {
			email: data.formLoginEmail,
			password: data.formLoginPassword
		})
			.then(function (response) {
				// console.log(response);
				const token = response.data.data.token

				localStorage.setItem('token', token)

				// console.log(token)
				// console.log('Successfully logged in!')
				props.setToken(token)
			})
			.catch(function (error) {
				console.log(error);
				alert('User email or password is incorrect!')
			});
	}


	const handleChange = (e) => {
		const newData = { ...data }
		newData[e.target.id] = e.target.value
		setData(newData)
		// console.log(newData)
	}

	return (
		<>
			<Container>
				<h1>Returning User? Log in!</h1>
				<Form onSubmit={handleSubmit}>
					<Form.Group className="mb-3" controlId="formLoginEmail">
						<Form.Label>User Name</Form.Label>
						<Form.Control type="user_name"
							placeholder="Enter Username"
							onChange={handleChange}
						/>
					</Form.Group>

					<Form.Group className="mb-3" controlId="formLoginPassword">
						<Form.Label>Password</Form.Label>
						<Form.Control type="password"
							placeholder="Password"
							onChange={handleChange}
						/>
					</Form.Group>

					<Button variant="dark" type="submit">
						Log in
        </Button>
				</Form>
			</Container>
		</>
	)
}