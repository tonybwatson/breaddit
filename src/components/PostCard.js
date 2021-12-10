import React from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import VoteButton from './VoteButton'
import CommentList from './CommentList'
import CommentButton from './CommentButton'
import DeleteButton from './DeleteButton'

export default function PostCard(props) {
	const { post, home, postPage, subreaddit, userData, getPosts } = props
	// console.log({ post, home, postPage, subreaddit, userData })
	let karma = 0;
	// console.log(post)
	const postKarma = Object.values(post.post_votes)
	// console.log({postKarma})

	const postKarmaFunction = () => {
		for (let i = 0; i < postKarma.length; i++) {
			if (post.post_votes[i].type_id === 1) {
				karma++
			} else if (post.post_votes[i].type_id === 2) {
				karma--
			}
		}
	}
	postKarmaFunction()

	// console.log({karma})
	return (
		<div>
			<Card className="d-flex justify-content-center"
				bg="dark"
				text="white"
				border="white"
				style={{ width: '90%' }}>
				<Card.Body>
					<Row>
						<Col xs={1}>
							{/* <img src={upvote} alt="upvote button" className="arrow"></img> */}
							<VoteButton post_id={post.id} type_id={1} getPosts={getPosts}/>
							<p>{karma}</p>
							<VoteButton post_id={post.id} type_id={2} getPosts={getPosts}/>

							{/* <img src={downvote} alt="downvote button" className="arrow"></img> */}
						</Col>
						<Col>
							{postPage ? <Card.Title >{post.title}</Card.Title>
								: <Card.Title as={Link} to={`/br/${post.subreaddit.name}/${post.id}`}>{post.title}</Card.Title>
							}
						</Col>
						{home &&
							<Col>
								<Card.Header as={Link} to={`/br/${post.subreaddit.name}`}>Posted in br/{post.subreaddit.name}</Card.Header>
							</Col>
						}
						{postPage &&
							<Col>
								<Card.Header as={Link} to={`/br/${post.subreaddit.name}`}>Posted in br/{post.subreaddit.name}</Card.Header>
							</Col>
						}
					</Row>
					<Card.Text>
						{post.content}
					</Card.Text>
					<Row>
						<Col>
							{home &&
								<Button as={Link} to={`/br/${post.subreaddit.name}/${post.id}`} variant="dark">Comments</Button>
							}
							{subreaddit &&
								<Button as={Link} to={`/br/${post.subreaddit.name}/${post.id}`} variant="dark">Comments</Button>
							}
							{postPage &&
								<>
									<CommentButton post={post} />
								</>
							}
							<Button href="#" variant="dark">Share</Button>
						</Col>
						{home &&
							<Col>
								<Button href="#" variant="dark">Join br/{post.subreaddit.name}</Button>
							</Col>
						}
					</Row>
					<Card.Text>Posted by {post.user.user_name}</Card.Text>
				</Card.Body>
				{!!userData && post.user.id === userData.id && postPage && <DeleteButton route={'posts'} number={post.id} type={'Your Post'} subName={post.subreaddit.name} />}
			</Card>
			{postPage &&
				<CommentList comments={post.comments} />
			}
			<br></br>
		</div>
	)
}

