import React, { useState } from 'react'
import axios from 'axios'
import { Button, Card, Form, Modal } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';

export default function CreateSub() {
	const [show, setShow] = useState(false);
	const [success, setSuccess] = useState(false);
	const [subName, setSubName] = useState('');
	const token = localStorage.getItem('token');

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	const navigate = useNavigate()

	const handleSubmit = (e) => {
		e.preventDefault()
		axios({
			method: 'post',
			url: 'https://breadditlaravel-tonybwatson324900.codeanyapp.com/api/v1/subreaddits',
			data: {
				name: subName,
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
				// handleClose();
				setSuccess(!success);
				// console.log(response)
			})
			.catch(function (error) {
				console.log(error);
			});
	}
	const handleChange = (e) => {
		const newsubName = e.target.value
		setSubName(newsubName)
		// console.log(newsubName)
	}
	const handleRedirect = () => {
		handleClose()
		navigate(`/br/${subName}`)
	}

	return (
		<div>
			<Card>
				<Button variant="dark" onClick={handleShow}>
					Create your own Subreaddit
                </Button>
			</Card>
			<Modal show={show} onHide={handleClose} centered>
				<Modal.Header closeButton>
					<Modal.Title>Create a Subreaddit</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					{success ? `Success Creating New Subreddit ${subName}!` :
						<Form onSubmit={handleSubmit}>
							<Form.Group className="mb-3" controlid="formSubName">
								<Form.Control type="name"
									// id="name"
									placeholder="New subreaddit name"
									onChange={handleChange}
									value={subName.name}
								/>
							</Form.Group>
						</Form>}

				</Modal.Body>
				<Modal.Footer>
					{success ?
						<Button variant="dark" onClick={handleRedirect}>
							Continue to new Sub
				 		</Button>
						:
						<>
							<Button variant="dark" onClick={handleClose}>
								Cancel
                    		</Button>
							<Button variant="dark" onClick={handleSubmit}>
								Create
                    		</Button>
						</>
					}
				</Modal.Footer>
			</Modal>
		</div>
	)
}
