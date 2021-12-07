import React from 'react'
import { Outlet } from 'react-router-dom'
import { Container, Navbar, Nav, Dropdown, Form, FormControl } from 'react-bootstrap'
import breadditLogo from '../img/breadditLogoCorrected.png'
import SignUp from './SignUp.js'
import LogIn from './LogIn.js'
import LogOut from './LogOut.js'
import { Link } from 'react-router-dom'

export default function MyNavbar(props) {

	return (
		<>
			<Navbar variant="dark"
				expand="sm"
			// fixed="top"
			>
				<Container fluid>
					<Navbar.Brand as={Link} to="/"><img src={breadditLogo}
						alt="breaddit logo: a piece of bread in an orange circle"
						height="50px"></img>
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="navbarScroll" />
					<Navbar.Collapse id="navbarScroll">
						<Nav
							className="me-auto my-2 my-lg-0"
							style={{ maxHeight: '100px' }}
							navbarScroll>
							{props.token.length > 0 ? <LogOut setToken={props.setToken} token={props.token} />
								:
								<>
									<Dropdown id="navbarScrollingDropdown" autoClose="outside">
										<Dropdown.Toggle>Sign Up</Dropdown.Toggle>
										<Dropdown.Divider />
										<Dropdown.Menu>
											<SignUp setToken={props.setToken} />
										</Dropdown.Menu>
									</Dropdown>
									<Dropdown id="navbarScrollingDropdown" autoClose="outside">
										<Dropdown.Toggle>Sign In</Dropdown.Toggle>
										<Dropdown.Menu>
											<LogIn setToken={props.setToken} />
										</Dropdown.Menu>
									</Dropdown>
								</>
							}
						</Nav>
						<Form className="d-flex">
							<FormControl
								type="search"
								placeholder="Search"
								className="me-2"
								aria-label="Search"
							/>
						</Form>
					</Navbar.Collapse>
				</Container>
			</Navbar>
			<Outlet />
		</>
	)
}
