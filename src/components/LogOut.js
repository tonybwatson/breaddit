import React from 'react'
import {Button} from 'react-bootstrap'
import axios from 'axios'

export default function LogOut(props) {
    // let token = localStorage.getItem('token')

    const handleSubmit = (e) => {
		e.preventDefault()
		axios({
			method: "get",
			url: 'https://breadditlaravel-tonybwatson324900.codeanyapp.com/api/v1/logout',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
				'Access-Control-Allow-Origin': '*',
				'Access-Control-Allow-Headers': 'Content-Type',
				'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE',
				'Access-Control-Allow-Credentials': true,
				'Authorization': 'Bearer ' + props.token
			}
		})
			.then(function (response) {
				console.log(response)
				localStorage.removeItem('token')
				props.setToken('')
			});
	}
    return (
        <Button onClick={handleSubmit}>Log Out</Button>
    )
}
