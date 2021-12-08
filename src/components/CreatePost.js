import React, { useState } from 'react'
import axios from 'axios'
import { Button, Card, Form, Modal } from 'react-bootstrap'

export default function CreatePost(props) {
	const [show, setShow] = useState(false);
	const [postData, setPostData] = useState({});
	const token = localStorage.getItem('token');

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	console.log(props)
	// console.log(props.subId)

	const handleSubmit = (e) => {
		e.preventDefault()
		axios({
			method: 'post',
			url: 'https://breadditlaravel-tonybwatson324900.codeanyapp.com/api/v1/posts',
			data: {
				title: postData.formPostTitle,
				content: postData.formPostContent,
				sub_id: props.subId
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
				handleClose();
				// console.log(response)
			})
			.catch(function (error) {
				console.log(error);
			});
	}
	const handleChange = (e) => {
		const newPostData = { ...postData }
		newPostData[e.target.id] = e.target.value
		setPostData(newPostData)
		// console.log(newPostData)
	}

	return (
		<div>

			<Card>
				<Button variant="dark" onClick={handleShow}>
					Create a Post
                </Button>
			</Card>
			<Modal show={show} onHide={handleClose} centered>
				<Modal.Header closeButton>
					<Modal.Title>Create a Post!</Modal.Title>
				</Modal.Header>
				<Modal.Body>

					<Form onSubmit={handleSubmit}>
						<Form.Group className="mb-3" controlId="formPostTitle">
							<Form.Control
								type="name"
								placeholder="Post Title"
								onChange={handleChange}
								defaultValue={postData.title}
							/>
						</Form.Group>
						<Form.Group className="mb-3" controlId="formPostContent">
							<Form.Control
								type="content"
								placeholder="Post Text"
								onChange={handleChange}
								defaultValue={postData.content}
							/>
						</Form.Group>
					</Form>

				</Modal.Body>
				<Modal.Footer>
					<Button type="button" variant="dark" onClick={handleClose}>
						Cancel
                    </Button>
					<Button type="button" variant="dark" onClick={handleSubmit}>
						Create
                    </Button>
				</Modal.Footer>
			</Modal>

		</div>
	)
}
