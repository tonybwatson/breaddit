import React from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import VoteButton from './VoteButton'
import CommentList from './CommentList'
import CommentButton from './CommentButton'
import DeleteButton from './DeleteButton'
import ShareButton from './ShareButton'

export default function PostCard(props) {
	const { post, home, postPage, subreaddit, userData, getPosts } = props
	// console.log({ post, home, postPage, subreaddit, userData })
	let karma = 1;
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
				border="white">
				<Card.Body>
					<Row>
						{/* Vote buttons */}
						<Col xs={1} >
							<VoteButton post_id={post.id} type_id={1} getPosts={getPosts} />
							<p className="m-1">{karma}</p>
							<VoteButton post_id={post.id} type_id={2} getPosts={getPosts} />
						</Col>

						{/* Card headers and content */}
						<Col xs={6} className="mx-3">
							{postPage ? <Card.Title ><strong>{post.title}</strong></Card.Title>
								: <><Card.Title as={Link} to={`/br/${post.subreaddit.name}/${post.id}`} className="mx-2"><strong>{post.title}</strong></Card.Title></>
							}
						</Col>
						<Col>
							<Card.Text className="text-end"><strong>Posted by {post.user.user_name} </strong><br /></Card.Text>
							{!subreaddit &&
						<Col>
							<Card.Header as={Link} to={`/br/${post.subreaddit.name}`} className="d-flex justify-content-end">br/{post.subreaddit.name}</Card.Header>
						</Col>
					}
						</Col>
					</Row>

					



					{/* {postPage && */}
					<Card.Text>
						{post.content}
					</Card.Text>
					{/* } */}
					{/* Bottom of card */}
					<Row className="mt-2">
						{!postPage &&
							<Col xs={3}>
								<Card>
									<Button as={Link} to={`/br/${post.subreaddit.name}/${post.id}`} variant="dark">Comments</Button>
								</Card>
							</Col>
						}
						{postPage &&
							<>
								<Col xs={5}>
									<CommentButton post={post} getPosts={props.getPosts} />
								</Col>
							</>
						}
						<Col xs={3}>
							<ShareButton />
						</Col>
						{home &&
							<Col xs={6}>
								<Card>
									<Button href="#" variant="dark" xs={4}>Join br/{post.subreaddit.name}</Button>
								</Card>
							</Col>
						}
					</Row>
				</Card.Body>
				{!!userData && post.user.id === userData.id && postPage && <DeleteButton route={'posts'} number={post.id} type={'Your Post'} subName={post.subreaddit.name} getPosts={getPosts} />}
			</Card>
			{postPage &&
				<CommentList comments={post.comments} />
			}
			<br></br>
		</div>
	)
}

