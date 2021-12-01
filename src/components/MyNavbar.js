import React from 'react'
import {Outlet} from 'react-router-dom'
import { Container, Navbar, Nav, NavDropdown, Form, FormControl } from 'react-bootstrap'
import breadditLogo from '../img/breadditLogoCorrected.png'
import CreateUser from './CreateUser.js'
import LogIn from './LogIn.js'


export default function MyNavbar() {
    return (
        <>
            <Navbar variant="dark" 
            expand="lg" 
            // fixed="top"
            >
                <Container fluid>
                    <Navbar.Brand href="#"><img src={breadditLogo}
                        alt="breaddit logo: a piece of bread in an orange circle"
                        height="50px"></img>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll>
                            <Nav.Link href="#action1">Home</Nav.Link>
                            <NavDropdown title="Sign Up" id="navbarScrollingDropdown">
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action5">
                                    <CreateUser />
                                </NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="Log In" id="navbarScrollingDropdown">
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action5">
                                    <LogIn />
                                </NavDropdown.Item>
                            </NavDropdown>
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
