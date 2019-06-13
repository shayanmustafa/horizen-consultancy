import React, { Component } from 'react'
import { Navbar, Nav} from 'react-bootstrap'

class NavBar extends Component {
    render() {
        return (
                <Navbar bg="dark" variant = "dark" expand="lg">
                    <Navbar.Brand href="#home">Horizen</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="about">About</Nav.Link>
                            <Nav.Link href="services">Services</Nav.Link>
                            <Nav.Link href="contact">Contact</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
        )
    }
}

export default NavBar