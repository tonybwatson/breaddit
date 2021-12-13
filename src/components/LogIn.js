import React, { useState } from 'react'
import { Form, Button, Container } from 'react-bootstrap'
import axios from 'axios'

export default function LoginInput(props) {

	const [data, setData] = useState({})

	const handleSubmit = (e) => {
		e.preventDefault()
		axios({
			method: 'post',
			url: 'https://breadditlaravel-tonybwatson324900.codeanyapp.com/oauth/token',
			data: {
				username: data.formLoginEmail,
				password: data.formLoginPassword,
				client_secret: 'E0VCmuXLtav4JehRVzsEETC4Wyps7656GIkmNz1l',
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
				// console.log(response);
				const token = response.data.access_token

				localStorage.setItem('token', token)

				// console.log(token)
				// console.log('Successfully logged in!')
				props.setToken(token)
			})
			.catch(function (error) {
				// console.log(error);
				localStorage.removeItem('token')
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
				<h2>Returning User? Log in!</h2>
				<Form onSubmit={handleSubmit}>
					<Form.Group className="mb-3" controlId="formLoginEmail">
						<Form.Label>User Email</Form.Label>
						<Form.Control type="text"
							placeholder="Enter Email"
							onChange={handleChange}
							name="email"
							value={data.formLoginEmail || ''}
						/>
					</Form.Group>

					<Form.Group className="mb-3" controlId="formLoginPassword">
						<Form.Label>Password</Form.Label>
						<Form.Control type="password"
							placeholder="Password"
							onChange={handleChange}
							name="email"
							value={data.formLoginPassword || ''}
						/>
					</Form.Group>

					<Button variant="dark" type="submit" 
					// disabled={data.formLoginPassword === '' || data.forLoginEmail === ''} 
					>
						Log in
          </Button>
				</Form>
			</Container>
		</>
	)
}