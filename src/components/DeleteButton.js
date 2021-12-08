import React, { useState } from 'react'
import axios from 'axios'
import { Card, Button, Modal } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';


export default function DeleteButton({ route, number, type, subName }) {
	const [show, setShow] = useState(false);
	const [success, setSuccess] = useState(false);
	const token = localStorage.getItem('token');

	const handleSubmit = (e) => {
		e.preventDefault()
		axios({
			method: 'delete',
			url: 'https://breadditlaravel-tonybwatson324900.codeanyapp.com/api/v1/' + route,
			data: {
				post_id: number
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
				// console.log(response);
				setSuccess(!success);
				// handleClose();
				handleRedirect();
			})
			.catch(function (error) {
				console.log(error);
			});
	}

	const handleClose = () => setShow(false)
	const handleShow = () => setShow(true)
	const navigate = useNavigate()
	const handleRedirect = () => {
		handleClose()
		navigate(`/br/${subName}`)
	}
	// const redirectAndGo = () => {
	// 	handleSubmit()
	// 	handleRedirect()
	// }

	return (
		<>
			<Card>
				<Button variant="dark" onClick={handleShow}>
					Delete {type}
				</Button>
			</Card>

			<Modal show={show} onHide={handleClose} centered>
				<Modal.Header closeButton>
					<Modal.Title>Are you sure you want to delete this post?</Modal.Title>
				</Modal.Header>
				<Modal.Footer>
					<Button type="button" variant="dark" onClick={handleClose}>
						Cancel
					</Button>
					<Button type="button" variant="dark" onClick={handleSubmit}>
						Delete
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	)
}
