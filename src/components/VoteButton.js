import React, { useState } from 'react'
import axios from 'axios'
import upvote from '../img/upvote.png'
import downvote from '../img/downvote.png'

export default function VoteButton(props) {
	// const [newVote, setNewVote] = useState('');
	const token = localStorage.getItem('token');

	// console.log({ props })

	const handleClick = () => {
		axios({
			method: 'post',
			url: 'https://breadditlaravel-tonybwatson324900.codeanyapp.com/api/v1/postvotes',
			data: {
				type_id: props.type_id,
				post_id: props.post_id
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
				// setNewVote(response)
				props.getPosts()
				// console.log({ response })

			})
			.catch(function (error) {
				console.log(error);
			});
	}

	return (<>
		{props.type_id === 1 ?
			<img src={upvote} alt="upvote button" className="arrow" onClick={handleClick}></img>
			:
			<img src={downvote} alt="downvote button" className="arrow" onClick={handleClick}></img>
		}</>
	)
}
